import { faArrowAltCircleRight, faPenToSquare, faRoadLock, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DBCards = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://abc-publications-server-ii.vercel.app/api/v1/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);


    useEffect(() => {
        fetch('https://abc-publications-server-ii.vercel.app/api/v1/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    // console.log(posts);

    const approvePosts = posts && posts.filter(p => p.status === "approve");
    const unapprovePosts = posts && posts.filter(p => p.status === "unapprove");


    // const TotalBalance = accounts?.map(a => a.balance)
    //     .reduce((a, b) => {
    //         return a + b;
    //     }, 0);

    // useEffect(() => {
    //     fetch('https://online-bank-of-bd-server.vercel.app/statements')
    //         .then(res => res.json())
    //         .then(data => setTransactions(data))
    // }, [])


    return (
        <div className=''>
            <div className="grid grid-cols-1 gap-5 py-10">
                {/* Registered Users */}
                <div className="">
                    <div className="flex items-center justify-between bg-rose-300 p-3 rounded-t-xl">
                        <div className="">
                            <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">{users?.length}</h3>
                            <h3 className="text-md font-bold text-white">Total Registered Users</h3>
                        </div>
                        <div className="">
                            <FontAwesomeIcon className='text-[#42424281] text-3xl md:text-4xl' icon={faUserPlus} />
                        </div>
                    </div>
                    <div onClick={() => navigate('/cpanel/musers')} className="bg-rose-400 cursor-pointer py-2 text-center rounded-b-xl">
                        <h2 className="text-md text-white">More Info <FontAwesomeIcon className='pl-2' icon={faArrowAltCircleRight} /> </h2>
                    </div>
                </div>
                {/* Bank Accounts */}
                <div className="">
                    <div className="flex items-center justify-between bg-[#17A2BB] p-3 rounded-t-xl">
                        <div className="">
                            <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">{approvePosts?.length}</h3>
                            <h3 className="text-md font-bold text-white">Total Approve Post</h3>
                        </div>
                        <div className="">
                            <FontAwesomeIcon className='text-[#42424281] text-3xl md:text-4xl' icon={faPenToSquare} />
                        </div>
                    </div>
                    <div onClick={() => navigate('/cpanel/approveposts')} className="bg-[#0c93ab] cursor-pointer py-2 text-center rounded-b-xl">
                        <h2 className="text-md text-white">More Info <FontAwesomeIcon className='pl-2' icon={faArrowAltCircleRight} /> </h2>
                    </div>
                </div>
                {/* OBB Balance */}
                <div className="">
                    <div className="flex items-center justify-between bg-[#28A745] p-3 rounded-t-xl">
                        <div className="">
                            <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">{unapprovePosts?.length} </h3>
                            <h3 className="text-md font-bold text-white">Total UnApprove Post</h3>
                        </div>
                        <div className="">
                            <FontAwesomeIcon className='text-[#42424281] text-3xl md:text-4xl' icon={faRoadLock} />
                        </div>
                    </div>
                    <div onClick={() => navigate('/cpanel/unapproveposts')} className="bg-[#0f9c30] cursor-pointer py-2 text-center rounded-b-xl">
                        <h2 className="text-md text-white">More Info <FontAwesomeIcon className='pl-2' icon={faArrowAltCircleRight} /> </h2>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DBCards;