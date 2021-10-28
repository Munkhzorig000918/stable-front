import React from 'react'
import GC from '../assets/GC.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const conpany = [
        
]

const Ourcompany = () =>{

    return(
        <div className="w-full flex flex-col justify-center items-center">
            
                <div className="mx-2.5 lg:pl-16">
                    <h1 className="font-bold text-3xl py-14" id='company'>Хамтрагч байгууллагууд</h1>
                </div>
                <div className='sm:w-2/4'>
                <Carousel>
                        <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center">
                            
                            <img src={GC} width="150px" />
                            
                        </div>
                        <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center">
                            
                            <img src={GC} width="150px" />
                            
                        </div>
                        <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center">
                            
                            <img src={GC} width="150px" />
                            
                        </div>
                        <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center">
                            
                            <img src={GC} width="150px" />
                            
                        </div>
                        <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center">
                            
                            <img src={GC} width="150px" />
                            
                        </div>
                        <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center">
                            
                            <img src={GC} width="150px" />
                            
                        </div>
                        <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center">
                            
                            <img src={GC} width="150px" />
                            
                        </div>
                        <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center">
                            
                            <img src={GC} width="150px" />
                            
                        </div>
                        </Carousel>
                        </div>
            </div>

    )
}

export default Ourcompany