import React from "react";
import Bubble from "../assets/Frame.png"
import Robo from "../assets/human.png"

const MyTeam = () => {
    return(
        <div className="w-full" style={{ backgroundImage: `url(${Bubble})` }}>
            <div className="container mx-auto flex flex-col">
                <div className="mx-2.5 lg:pl-16">
                    <h1 className="font-bold text-3xl py-14">Төсөлийн баг</h1>
                </div>
                <div className="container mx-auto">
                    <div className="flex justify-around mx-2.5 space-x-5">
                        <div className="space-y-12">
                            <div className="bg-white shadow-xl rounded-xl flex flex-col justify-center items-center ">
                                <img src={Robo} />
                                <h1 className="text-xl mt-5">Tuku</h1>
                                <p className="text-center mt-5 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">Co-Founder & Ceo</p>
                            </div>
                            <div className="bg-white shadow-xl rounded-xl flex flex-col justify-center items-center ">
                                <img src={Robo} />
                                <h1 className="text-xl mt-5">Tuku</h1>
                                <p className="text-center mt-5 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">Co-Founder & Ceo</p>
                            </div>
                            <div className="bg-white shadow-xl rounded-xl flex flex-col justify-center items-center ">
                                <img src={Robo} />
                                <h1 className="text-xl mt-5">Tuku</h1>
                                <p className="text-center mt-5 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">Co-Founder & Ceo</p>
                            </div>
                        </div>
                        <div className=" space-y-12">
                            <div className="bg-white shadow-xl rounded-xl flex flex-col justify-center items-center ">
                                <img src={Robo} />
                                <h1 className="text-xl mt-5">Tuku</h1>
                                <p className="text-center mt-5 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">Co-Founder & Ceo</p>
                            </div>
                            <div className="bg-white shadow-xl rounded-xl flex flex-col justify-center items-center ">
                                <img src={Robo} />
                                <h1 className="text-xl mt-5">Tuku</h1>
                                <p className="text-center mt-5 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">Co-Founder & Ceo</p>
                            </div>
                            <div className="bg-white shadow-xl rounded-xl flex flex-col justify-center items-center ">
                                <img src={Robo} />
                                <h1 className="text-xl mt-5">Tuku</h1>
                                <p className="text-center mt-5 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">Co-Founder & Ceo</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex items-center justify-center py-10">
                    <div className="bg-black p-5 rounded-lg hover:bg-blue-400 transition-all duration-200 cursor-pointer">
                        <h1 className="font-bold text-white">+ Бүх хүмүүс</h1>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default MyTeam