import React from "react";

const AboutMission = () => {
  return (
    <div className="  pt-14 p-5">
      <div className=" lg:container my-20 md:my-20 mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-12 grid-flow-row md:gap-5 ">
          <div className="col-span-7  flex  md:flex-row flex-col ">
            <div className="flex flex-col   px-0 ">
              <img
                src="https://i.ibb.co/9TNKgRr/aboutus2.jpg"
                alt=""
                className="w-full  mb-4 rounded"
              />
              <img
                src="https://i.ibb.co/yfYdjg2/cook.jpg"
                alt=""
                className="w-full  mb-4 rounded "
              />
            </div>
            <div className="flex flex-col md:px-3  px-0 relative  md:mt-[-100px] ">
              <img
                src="https://i.ibb.co/dbt78YN/night-guard.webp"
                alt=""
                className="w-full  mb-4 rounded"
              />

              <img
                src="https://i.ibb.co/6XsgYH0/painter.jpg"
                alt=""
                className="w-full  md:w-96 mb-4 rounded"
              />
            </div>
          </div>
          <div className=" col-span-5  bg-base-100  flex justify-center items-center p-5 ">
            <div className=" card shadow-lg lg:px-8">
              <div className="card-body">
                <h1 className="my-4 text-3xl font-semibold md:text-left sm:text-center	leading-6 ">
                  About Us
                </h1>
                <p className="text-slate-900  md:text-left sm:text-center text-lg">
                  This platform will be given services in a short period of time whenever require. Our services includes housemaids, plumbers, Electricians, caretakers, drivers, nurse and many more. If you want to work as our team then join us through the form. The platform is dedicated to save you cost and time. We are expanding our services to the different parts of the country and trying to help people by giving them a chance yo do jobs and become self-reliant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
