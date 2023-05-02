import React from 'react';

import loading from '../../images/movieLoading.gif';
const Loading = () => {
    return (
        <div className='bg-white w-full h-full-screen flex items-center justify-center'>
            <img className='' src={loading} alt="" />
        </div>
    );
};

export default Loading;