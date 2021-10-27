import React from 'react'
import GC from '../assets/GC.png'

const Ourcompany = () =>{
    return(
        <div className="w-full">
            <div className="container mx-auto flex flex-col">
                <div className="mx-2.5 lg:pl-16">
                    <h1 className="font-bold text-3xl py-14">Хамтрагч байгуулга</h1>
                </div>
                <div className="container mx-auto">
                    <div className="flex justify-evenly mx-2.5 space-x-5">
                        <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center">
                            
                            <img src={GC} width="90px" />
                            
                        </div>
                        <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center">
                            
                            <img src={GC} width="90px" />
                            
                        </div>
                        <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center">
                            
                            <img src={GC} width="90px" />
                            
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
    )
}

export default Ourcompany