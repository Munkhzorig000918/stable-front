import React from "react";
import Spin from '../assets/title.png'
import video from '../assets/23.gif'

const Feature = () => {
    return(
        <div className="w-full py-10">
            <div className="container mx-auto">
                <div className="lg:flex lg:flex-row justify-evenly flex flex-col-reverse">
                    <div className="">
                        <img src={video} className="" />
                    </div>
                    <div className="flex flex-col mx-2.5 lg:w-2/4 lg:ml-16">
                        <h1 className=" font-extrabold text-xl lg:text-2xl">Дэлхийн крипто зах зээлд нэвтрэх боломж</h1>
                        <p className="font-light text-gray-600 text-justify mt-5">Даяарчлалын давлагаа дэлхий дахиныг нөмөрсөн мэдээллийн шинэ эрин үед виртуал хөрөнгийн зах зээл хурдацтай өссөөр байна. MONT нь крипто зах зээлд идэвхтэй оролцоход ашиглах хамгийн таатай хэрэгсэл.</p>
                        <h1 className="font-extrabold text-xl lg:text-2xl mt-10">Дэлхийн хаана ч, хэзээ ч</h1>
                        <p className="font-light text-gray-600 text-justify mt-5">MONT нь Ethereum, Binance Smart Chain, Solana, Cardano болон бусад блокчэйнууд дээр орших юм. Та дэлхийн хаана ч, хэзээ ч өөрийн хүссэн сүлжээн дээр койноо хадгалж, арилжаанд оролцох боломжтой.</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex lg:flex-row lg:justify-around">
                <div className="flex flex-col mx-2.5 mt-36 lg:w-2/4">
                    <h1 className="font-extrabold text-xl lg:text-2xl">Интернетэд зориулсан мөнгө</h1>
                    <p className="font-light text-gray-600 mt-5 lg:w-2/3">MONT нь блокчэйн технологийн чанар болон уламжлалт мөнгөний давуу талыг хослуулсан учир таны цахим гүйлгээний хэрэгцээг хангах хамгийн дэвшилтэт хэрэгсэл болох юм.</p>
                </div>
                    <div className="">
                        <img src={Spin} className="" />
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Feature