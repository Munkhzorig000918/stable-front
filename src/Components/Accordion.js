import React from "react";
import './accordion.css'
import { FaAngleDown } from "react-icons/fa";
import Bubble from '../assets/Frame.png'

const Accordion = () => {
    return(
        <div>
            <div className="container mx-auto py-28" style={{backgroundImage: `url(${Bubble})`}}>
                <div className="">
                    <h1 id="faq" className="text-center font-bold text-4xl">Түгээмэл асуулт хариулт</h1>
                </div>
                <div className="m-8 rounded overflow-hidden">
                    <div className="group outline-none accordion-section" tabindex="1">
                        <div className="group flex justify-between px-4 py-3 items-center text-gray-600 transition ease duration-500 cursor-pointer pr-10">
                        <div className="group-focus:text-gray-600 transition ease duration-500  font-extrabold lg:text-2xl">
                            Стэйблкойн гэж юу вэ?
                        </div>
                        <div className="">
                            <FaAngleDown />
                        </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0  px-4 overflow-hidden ease duration-500">
                        <p className="p-2 text-gray-700 text-justify">
                            Стэйблкойн нь валютын нөөцөөр баталгаажиж, үнэ цэнээ аргамжсан криптовалютын төрөл юм
                        </p>
                        </div>
                    </div>
                    <div className="group outline-none accordion-section" tabindex="2">
                        <div className="group  flex justify-between px-4 py-3 items-center text-gray-600 transition ease duration-500 cursor-pointer pr-10">
                        <div className="group-focus:text-gray-600 transition ease duration-500 font-extrabold lg:text-2xl ">
                            MONT гэж юу вэ?
                        </div>
                        <div className="">
                            <FaAngleDown />
                        </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500">
                        <p className="p-2 text-gray-700 text-justify">
                            MONT нь Монгол төгрөгт аргамжсан стэйблкойн юм.
                        </p>
                        </div>
                    </div>
                    <div className="group outline-none accordion-section" tabindex="3">
                        <div
                        className="group flex justify-between px-4 py-3 items-center text-gray-600 transition ease duration-500 cursor-pointer pr-10"
                        >
                        <div className="group-focus:text-gray-600 transition ease duration-500 font-extrabold lg:text-2xl">
                            MONT нь аль блокчэйн дээр нэвтэрсэн байгаа вэ?
                        </div>
                        <div className="">
                            <FaAngleDown />
                        </div>
                        </div>
                        <div
                        className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500"
                        >
                        <p className="p-2 text-gray-700 text-justify">
                            MONT нь Binance Smart Chain болон Ethereum блокчэйн сүлжээнд байршсан бөгөөд удалгүй Solana, Cardano зэрэг блокчэйнд нэвтрэх ажил хийгдэж байна
                        </p>
                        </div>
                    </div>
                    <div className="group outline-none accordion-section" tabindex="3">
                        <div
                        className="group flex justify-between px-4 py-3 items-center text-gray-600 transition ease duration-500 cursor-pointer pr-10"
                        >
                        <div className="group-focus:text-gray-600 transition ease duration-500 font-extrabold lg:text-2xl">
                            MONT нь ямар үнэ цэнтэй бэ?
                        </div>
                        <div className="">
                            <FaAngleDown />
                        </div>
                        </div>
                        <div
                        className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500"
                        >
                        <p className="p-2 text-gray-700 text-justify">
                            MONT нь ямагт Монгол төгрөгтэй 1:1 харьцах үнэ цэнтэй байх болно
                        </p>
                        </div>
                    </div>
                    <div className="group outline-none accordion-section" tabindex="3">
                        <div
                        className="group flex justify-between px-4 py-3 items-center text-gray-600 transition ease duration-500 cursor-pointer pr-10"
                        >
                        <div className="group-focus:text-gray-600 transition ease duration-500 font-extrabold lg:text-2xl">
                            Хэрхэн MONT худалдаж авах вэ?
                        </div>
                        <div className="">
                            <FaAngleDown />
                        </div>
                        </div>
                        <div
                        className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500"
                        >
                        <p className="p-2 text-gray-700 text-justify">
                            Та MONT-ыг өөрийн хэрэглээний виртуал хөрөнгийн бирж дээр арилжиж авах боломжтой. Бид MONT-ыг дотоодын болон олон улсын биржүүдэд нэвтрүүлэхээр ажиллаж байна
                        </p>
                        </div>
                    </div>
                    <div className="group outline-none accordion-section" tabindex="3">
                        <div
                        className="group flex justify-between px-4 py-3 items-center text-gray-600 transition ease duration-500 cursor-pointer pr-10"
                        >
                        <div className="group-focus:text-gray-600 transition ease duration-500 font-extrabold lg:text-2xl">
                            Хэрхэн MONT-ыг шилжүүлэх вэ?
                        </div>
                        <div className="">
                            <FaAngleDown />
                        </div>
                        </div>
                        <div
                        className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500"
                        >
                        <p className="p-2 text-gray-700 text-justify">
                            Та MONT-ыг өөрийн хэрэглээний бирж эсвэл хэтэвчээр дамжуулан шилжүүлэх боломжтой. Та шилжүүлэг хийхээсээ өмнө зөв сүлжээгээр (BEP-20, ERC-20, г.м) хийж байгаагаа дахин нягтлаарай.
                        </p>
                        </div>
                    </div>
                    <div className="group outline-none accordion-section" tabindex="3">
                        <div
                        className="group flex justify-between px-4 py-3 items-center text-gray-600 transition ease duration-500 cursor-pointer pr-10"
                        >
                        <div className="group-focus:text-gray-600 transition ease duration-500 font-extrabold lg:text-2xl">
                            Яагаад MONT гэж?
                        </div>
                        <div className="">
                            <FaAngleDown />
                        </div>
                        </div>
                        <div
                        className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500"
                        >
                        <p className="p-2 text-gray-700 text-justify">
                            MONT нь Монгол иргэний хэрэглээнд хамгийн дөхөм, найдвартай, аюулгүй стэйблкойн юм. MONT-ын аюулгүй байдлыг Олон улсын блокчэйн аудитын компани болох Certik аудит хийсэн болно
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion