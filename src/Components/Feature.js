import React from "react";
import Spin from '../assets/title.png'
import video from '../assets/titles.gif'

const Feature = () => {
    return(
        <div className="w-full py-10">
            <div className="container mx-auto">
                <div className="lg:flex lg:flex-row justify-evenly flex flex-col-reverse">
                    <div className="flex items-center justify-center mt-2">
                        <img src={video} width="600px" className="" />
                    </div>
                    <div id="feature" className="flex flex-col justify-center mx-2.5 lg:w-2/4 lg:ml-16">
                        <h1 className=" font-extrabold text-xl lg:text-2xl">Нээлттэй</h1>
                        <p className="font-light text-gray-600 text-justify mt-5">MONT-ын үнэ цэнийг Монгол төгрөгөөр баталгаажуулж байна. MONT-ийг баталгаажуулж буй нөөцийг тогтмол аудит хийж олон нийтэд танилцуулах болно</p>
                        <h1 className="font-extrabold text-xl lg:text-2xl mt-10">Дэлхийн хаанаас ч, хэзээ ч</h1>
                        <p className="font-light text-gray-600 text-justify mt-5">MONT нь Ethereum, Binance Smart Chain, Solana, Cardano болон бусад блокчэйн платформууд дээр байрладаг. Тиймээс та дэлхийн хаанаас ч, хэзээ ч өөрийн хүссэн сүлжээнд койноо хадгалж, шилжүүлж, арилжаанд оролцох боломжтой юм</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex lg:flex-row lg:justify-around">
                <div className="flex flex-col mx-2.5 mt-36 lg:w-2/4">
                    <h1 className="font-extrabold text-xl lg:text-2xl">Интернет орчинд зориулсан мөнгө</h1>
                    <p className="font-light text-gray-600 mt-5 lg:w-2/3">MONT нь блокчэйн технологийн болон уламжлалт мөнгөний давуу талыг давхар агуулсан учир таны цахим гүйлгээг гүйцэтгэх хамгийн дэвшилтэт хэрэгсэл болно</p>
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