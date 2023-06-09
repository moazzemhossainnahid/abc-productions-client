import React, { useState } from 'react';

const PDFViewer2 = ({ url }) => {
    const handleDownload = () => {
        // Perform any necessary operations before the download
        // For example, fetch the PDF file from an API

        // Create a link element
        const link = document.createElement('a');
        link.href = url; // Replace with the actual path to your PDF file
        link.download = url; // Replace with the desired filename for the downloaded file
        link.target = '_blank';

        // Trigger the download
        link.click();
    };
    return (
        <div className='w-full mx-auto'>
            <button className='btn btn-outline mt-3 mx-auto flex gap-3 justify-center items-center px-7 py-2 rounded' onClick={handleDownload}>
               <span className="w-5"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" alt="" className="w-5" /></span>
               {/* <span className=""> Download Resources </span> */}
            </button>
        </div>
    );
};

export default PDFViewer2;
