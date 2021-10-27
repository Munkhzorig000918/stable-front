import React from "react";
import Background from "../assets/banner.png"
import './underline.css'

const Banner = () =>{
    return(
        <div className="">
            <div className="w-full">
                    <div className="container mx-auto py-10">
                        <div className="flex justify-around">
                            <div className="bg-white shadow-lg  w-24 rounded-md lg:rounded-xl lg:p-14 lg:w-1/4 flex justify-center items-center">
                                <p className="text-center text-blue-400 text-xl lg:text-5xl font-extrabold">+400,000</p>
                            </div>
                            <div className="bg-white shadow-lg p-2 w-24 rounded-md lg:rounded-xl lg:p-14 lg:w-1/4 flex justify-center items-center">
                                <p className="text-center text-blue-400 text-xl lg:text-5xl font-extrabold">1.2 trillion</p>
                            </div>
                            <div className="bg-white shadow-lg p-2 w-24 rounded-md lg:rounded-xl lg:p-14 lg:w-1/4 flex justify-center items-center">
                                <p className="text-center text-blue-400 text-xl lg:text-5xl font-extrabold">32.2 billion</p>
                            </div>
                        </div>
                    </div>
                 </div>
        </div>
    )
}

export default Banner