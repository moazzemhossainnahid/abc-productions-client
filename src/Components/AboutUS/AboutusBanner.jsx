import React from 'react';

const AboutusBanner = () => {
    return (
        <div>
            <div className={` bg-[url('https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_1280.jpg')] bg-cover h-[520px] relative bg-no-repeat flex items-center  `}>
                <div className="text-white max-w-2xl flex flex-col justify-end pl-10 font-bold ">
                    <h2 className="text-xl uppercase mb-2 font-mono">About ScholarSphere</h2>
                    <h3 className="text-3xl md:text-5xl font-mono">
                        Change Thinking <br /> Change Life
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default AboutusBanner;