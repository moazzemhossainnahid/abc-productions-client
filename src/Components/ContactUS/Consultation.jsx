import React from 'react';
import SimpleMap from './SimpleMap';


const Consultation = () => {
    return (
        <>
            <div className='mt-10 md:px-24 px-4'>
                <h1 className='text-4xl text-center font-semibold'>Request a Consultation</h1>
                <div className='divider w-14 mt-2 bg-cyan-400 h-1 mx-auto'></div>
                <form className='mt-10'>
                    <div className='md:flex justify-between grid grid-cols-1'>
                        <input type="text" placeholder='Your Name *' className='input input-bordered focus:outline-none mb-2 w-full md:mr-2' />
                        <input type="text" placeholder='Phone Number *' className='input input-bordered focus:outline-none mb-2 w-full md:mr-2' />
                        <input type="email" placeholder='Your Email *' className='input input-bordered focus:outline-none mb-2 w-full md:mr-2' />
                        <input type="date" placeholder='Date & Time for call *' className='input input-bordered focus:outline-none mb-2 w-full' />
                    </div>
                    <br />
                    <textarea name="consultation" id="consultation" className='textarea textarea-bordered w-full focus:outline-none h-36' placeholder='What is the nature of your appointment and who would you like to see? *'></textarea>
                    <button className="bg-cyan-400 mt-8 text-white px-2 md:px-4 mr-2 py-1 md:py-2 hover:bg-cyan-600 md:font-semibold">SEND REQUEST</button>
                </form>
            </div>
            <SimpleMap />
        </>
    );
};

export default Consultation;