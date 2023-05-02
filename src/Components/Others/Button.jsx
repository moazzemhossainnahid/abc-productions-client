import React from 'react';

const Button = ({children}) => {
    return (
        <button className='bg-indigo-700 text-white text-xl font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-300'>
            {children}
        </button>
    );
};
 
export default Button;