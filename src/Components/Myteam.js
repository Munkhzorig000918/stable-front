import React, {useState} from "react";
import Bubble from "../assets/Frame.png"
import Robo from "../assets/human.png"
import Od from "../assets/Munkhod.jpg"
import Eegii from "../assets/Eegii.png"



const member = [

    <div className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5 mt-10">
            <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-xl flex flex-col justify-center items-center ">
                <img className="w-44 rounded-full" src={Eegii} />
                <h1 className="text-xl mt-5">О. Мөнх-Оргил</h1>
                <p className="text-center mt-5 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(Төсөлийн менежер)</p>
                <p className="text-center mt-2 pb-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(АРД ЭКС ХХК Бизнес хөгжлийн менежер)</p>
            </div>
            <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-xl flex flex-col justify-center items-center ">
                <img className="w-44 rounded-full" src={Od} />
                <h1 className="text-xl mt-5">Д. Чадраабал</h1>
                <p className="text-center mt-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(Блокчэйн зөвлөх)</p>
                <p className="text-center mt-2 pb-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(АРД ЭКС ХХК Үйл ажилгаа хариуцсан захирал)</p>
            </div>
            <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-xl flex flex-col justify-center items-center ">
                <img className="w-44 rounded-full" src={Eegii} />
                <h1 className="text-xl mt-5">Д. Анхбаясгалан</h1>
                <p className="text-center mt-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(Блокчэйн зөвлөх)</p>
                <p className="text-center mt-2 pb-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(АРД ЭКС ХХК Тэхнологи хариуцсан захирал )</p>
            </div>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row justify-around items-center mx-2.5 mt-10">
            <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-xl flex flex-col justify-center items-center ">
                <img className="w-44 rounded-full" src={Od} />
                <h1 className="text-xl mt-5">Т. Бумцэнд</h1>
                <p className="text-center mt-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(График дизайн)</p>
                <p className="text-center mt-2 pb-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(График дизайн, Дайверс Солюшн)</p>
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
                        
                            <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Eegii} />
                                <h1 className="text-xl mt-5">М.Энх-Амгалан</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(Блокчэйн зөвлөх)</p>
                                <p className="text-center mt-2 pb-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(Гүйцэтгэх захирал, Дайверс Солюшн)</p>
                            </div>
                            <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Od} />
                                <h1 className="text-xl mt-5">С.Тулга</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(Үүсгэн байгуулагч)</p>
                                <p className="text-center mt-2 pb-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(Монгол DFAI Гүйцэтгэх захирал)</p>
                            </div>
                            <div className="bg-white shadow-xl mt-5 w-80 h-80 rounded-xl flex flex-col justify-center items-center ">
                                <img className="w-44 rounded-full" src={Od} />
                                <h1 className="text-xl mt-5">Г.Мөнх-Од</h1>
                                <p className="text-center mt-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(Блокчэйн хөгжүүлэгч)</p>
                                <p className="text-center mt-2 pb-2 font-extrabold lg:font-extralight text-xs lg:text-base text-gray-500">(Тэхнологи хариуцсан захирал, Дайверс Солюшн)</p>
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