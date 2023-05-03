import React from "react";
import { RiseLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center mt-2 w-full h-screen py-10">

            <RiseLoader color="#36d7b7" size={70} />

        </div>
    );
};

export default Loading;