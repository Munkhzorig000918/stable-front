import React, {useState} from 'react'
import GC from '../assets/GC.png'
import Coinhub from '../assets/coinhub.png'
import Trade from '../assets/trade.png'
import Complex from '../assets/Complex.jpeg'
import DS from '../assets/ds.jpg'
import Ard from '../assets/ARd.png'
import dax from '../assets/dax.jpeg'
import tenger from '../assets/tenger.jpeg'

// const company = [
//     <div className="container mx-auto">
//         <div className="flex flex-col lg:flex lg:flex-row justify-around mx-2.5">
//             <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-full flex flex-col justify-center items-center">
//                 <img className='rounded-full' src={GC} />
//             </div>
//             <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-full flex flex-col justify-center items-center">
//                 <img className='rounded-full' src={DS} />
//             </div>
//             <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-full flex flex-col justify-center items-center">
//                 <img className='rounded-full' src={Ard} />
//             </div>
//         </div>
//         <div className="flex flex-col lg:flex lg:flex-row justify-around mx-2.5 mt-5">
//             <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-full flex flex-col justify-center items-center">
//                 <img className='rounded-full' src={dax} />
//             </div>
//             <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-full flex flex-col justify-center items-center">
//                 <img className='rounded-full' src={Complex} />
//             </div>
//             <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-full flex flex-col justify-center items-center">
//                 <img className='rounded-full' src={tenger} />
//             </div>
//         </div>
//     </div>
// ]

const Ourcompany = () =>{

    const [showMore, setShowMore] = useState(false);

    return(
        <div className="w-full">
            <div className="container mx-auto flex flex-col justify-center items-center  pb-10">
                <div className="mx-2.5 lg:pl-16">
                    <h1 className="font-bold text-3xl py-14" id='company'>Хамтрагч байгууллагууд</h1>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5">
                        <div className="bg-white shadow-xl mt-5 w-40 h-40 rounded-full flex flex-col justify-center items-center">
                            <img className='rounded-full w-full' src={GC} />
                        </div>
                        <div className="bg-white shadow-xl mt-5 w-40 h-40 rounded-full flex flex-col justify-center items-center">
                            <img className='rounded-full w-full' src={DS} />
                        </div>
                        <div className="bg-white shadow-xl mt-5 w-40 h-40 rounded-full flex flex-col justify-center items-center">
                            <img className='rounded-full w-full' src={Ard} />
                        </div>
                        <div className="bg-white shadow-xl mt-5 w-40 h-40 rounded-full flex flex-col justify-center items-center">
                            <img className='rounded-full w-full' src={tenger} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5 mt-5">
                        <div className="bg-white shadow-xl mt-5 w-40 h-40 rounded-full flex flex-col justify-center items-center">
                            <img className='rounded-full w-full' src={Trade} />
                        </div>
                        <div className="bg-white shadow-xl mt-5 w-40 h-40 rounded-full flex flex-col justify-center items-center">
                            <img className='rounded-full w-full' src={Complex} />
                        </div>
                        <div className="bg-white shadow-xl mt-5 w-40 h-40 rounded-full flex flex-col justify-center items-center">
                            <img className='rounded-full w-full' src={dax} />
                        </div>
                      
                        <div className="bg-white shadow-xl mt-5 w-40 h-40 rounded-full flex flex-col justify-center items-center">
                            <img className='rounded-full w-full' src={Coinhub} />
                        </div>
                    </div>
                </div>
                {/* {
                    showMore && company.map((item)=> 
                    <div>
                        {item}
                    </div>
                    )
                } */}
                {/* <div className="flex items-center justify-center py-10">
                    <div onClick={() => setShowMore(!showMore)} className="bg-black p-5 rounded-lg hover:bg-blue-400 transition-all duration-200 cursor-pointer">
                        <h1 className="font-bold text-white">+ Бүх байгууллагууд</h1>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Ourcompany