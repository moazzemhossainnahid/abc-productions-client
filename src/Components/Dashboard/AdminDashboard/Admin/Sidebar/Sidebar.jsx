import { faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { SidebarData } from '../../../../../assets/Data';
import useProfile from '../../../../../Hooks/useProfile';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [profile] = useProfile();
  return (
    <div className="flex sticky bg-white -mt-20">
      <div className={` ${open ? "w-72 h-screen" : "w-20 h-screen"} bg-[#EBEFEE] sticky p-5 duration-300`} >
        <img src="https://i.ibb.co/CB1yQwj/kuba-arrow-button-set-2.png" className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} alt="" />
        <div className="flex flex-col gap-x-4 items-center">
          <h3 className={`cursor-pointer w-full text-2xl font-bold text-rose-600 mx-auto opacity-0 duration-500 ${open && " w-2/3 rotate-[360deg] opacity-100"}`} > ScholarSphere </h3> <br />
          {open && <span className="text-gray-400 px-4 py-1 text-sm border rounded">{profile?.role}</span>}
        </div>
        <ul className="pt-6">
          {SidebarData?.map((data, index) => (
            <NavLink to={data?.href} key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-500 hover:text-white hover:bg-light-white font-semibold text-gray-500 text-sm items-center gap-x-4  ${data?.gap ? "mt-9" : "mt-5"} ${index === 0 && "bg-light-white"} `} >
              <NavLink to={data?.href} className={`${open && "hidden"} text-md origin-left duration-200`}>
                <FontAwesomeIcon className='text-2xl' icon={data?.icon} />
              </NavLink>
              <NavLink to={data?.href} className={`${!open && "hidden"} text-md origin-left flex items-center justify-center gap-2 duration-200`}>
                <FontAwesomeIcon className='text-2xl' icon={data?.icon} />
                {data?.title}
              </NavLink>
            </NavLink>
          ))}
        </ul>
        <div className={`flex rounded-md p-2 my-10 cursor-pointer hover:bg-gray-500 hover:text-white hover:bg-light-white text-gray-500 text-sm items-center gap-x-4  `}>
          <a href='/' className={`${!open && "hidden"} text-md flex items-center font-semibold origin-left duration-200`}> <FontAwesomeIcon className='text-2xl pr-2' icon={faHomeAlt} />  Back to Homepage </a>
          <a href='/' className={`${open && "hidden"} text-md flex items-center font-semibold origin-left duration-200`}> <FontAwesomeIcon className='text-2xl pr-2' icon={faHomeAlt} /></a>
        </div>
      </div>
      <div className="h-screen flex-1 max-w-7xl mx-auto p-7">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;