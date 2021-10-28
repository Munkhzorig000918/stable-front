import React, {useState} from "react";
import Bubble from "../assets/Frame.png"
import Robo from "../assets/human.png"

import Eegii from "../assets/eegii.jpeg"
import Tseku from "../assets/tseku.jpeg"
import Anhaa from "../assets/anhaa.jpeg"
import Orgil from "../assets/orgil.jpeg"
import Tulga from "../assets/tulga.jpeg"
import Chuky from "../assets/chuky.jpeg"
import Od from "../assets/od.jpeg"



const member = [

    <div className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5 mt-10">
            <div className="bg-white shadow-xl mt-5 w-80 h-96 rounded-xl flex flex-col justify-center items-center ">
                <img className="w-44 rounded-full" src={Eegii} />
                <h1 className="text-xl mt-5">М.Энх-Амгалан</h1>
                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-gray-700">Блокчэйн зөвлөх</p>
                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-gray-600 mx-0.5">Дайверс Солюшн ХХК, Гүйцэтгэх захирал</p>
            </div>
            
            <div className="bg-white shadow-xl mt-5 w-80 h-96 rounded-xl flex flex-col justify-center items-center ">
                <img className="w-44 rounded-full" src={Chuky} />
                <h1 className="text-xl mt-5">Д. Чадраабал</h1>
                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-gray-700">Блокчэйн зөвлөх</p>
                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-gray-600 mx-1.5">АРД ЭКС ХХК, Үйл ажиллагаа хариуцсан захирал</p>
            </div>
            <div className="bg-white shadow-xl mt-5 w-80 h-96 rounded-xl flex flex-col justify-center items-center ">
                <img className="w-44 rounded-full" src={Anhaa} />
                <h1 className="text-xl mt-5">Д. Анхбаясгалан</h1>
                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-gray-700">Блокчэйн зөвлөх</p>
                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-gray-600">АРД ЭКС ХХК, Технологи хариуцсан захирал</p>
            </div>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5 mt-10">
            <div className="bg-white shadow-xl mt-5 w-80 h-96 rounded-xl flex flex-col justify-center items-center ">
                <img className="w-44 rounded-full" src={Tseku} />
                <h1 className="text-xl mt-5">Т. Бумцэнд</h1>
                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-gray-700">Ахлах дизайнер</p>
                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-gray-600 mx-3.5">Дайверс Солюшн ХХК, Ахлах дизайнер</p>
            </div> 
        </div>
    </div>
];


const MyTeam = () => {
    const [showMore, setShowMore] = useState(false);

    return(
        <div id="team" className="w-full" style={{ backgroundImage: `url(${Bubble})` }}>
            <div className="container mx-auto flex flex-col">
                <div className="mx-2.5 lg:pl-16">
                    <h1 className="font-bold text-3xl py-14">Төслийн баг</h1>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5">
                            <div className="bg-white shadow-xl mt-5 w-80 h-96 rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Tulga} />
                                <h1 className="text-xl mt-5">С.Тулга</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-gray-700">Төслийн удирдагч</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-gray-600 mx-3.5">Монгол ДиФай ХХК, Гүйцэтгэх захирал</p>
                            </div>
                            <div className="bg-white shadow-xl mt-5 w-80 h-96 rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Od} />
                                <h1 className="text-xl mt-5">Г.Мөнх-Од</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-gray-700">Блокчэйн хөгжүүлэгч</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-gray-600">Дайверс Солюшн ХХК, Технологи хариуцсан захирал</p>
                            </div>
                            <div className="bg-white shadow-xl mt-5 w-80 h-96 rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Orgil} />
                                <h1 className="text-xl mt-5">О. Мөнх-Оргил</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extrabold text-xs lg:text-base text-gray-700">Төслийн менежер</p>
                                <p className="text-center mt-2 pb-2 text-xs lg:text-base text-gray-600 mx-0.5">АРД ЭКС ХХК, Бизнес хөгжлийн менежер</p>
                            </div>
                        </div>
                </div>
                {
                    showMore && member.map((item)=> 
                    <div>
                        {item}
                    </div>
                    )
                }
                
                <div className="flex items-center justify-center py-10">
                    <div onClick={() => setShowMore(!showMore)} className="bg-black p-5 rounded-lg hover:bg-blue-400 transition-all duration-200 cursor-pointer">
                        <h1 className="font-bold text-white">+ Бүх хүмүүс</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyTeam