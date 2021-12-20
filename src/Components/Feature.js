import React from "react";
import Spin from '../assets/title.png'
import video from '../assets/titles.gif'
import { Trans, useTranslation } from "react-i18next";

const Feature = () => {

    const { t, i18n } = useTranslation();

    return(
        <div className="w-full py-10">
            <div className="container mx-auto">
                <div className="lg:flex lg:flex-row justify-evenly flex flex-col-reverse">
                    <div className="flex items-center justify-center mt-2">
                        <img src={video} width="600px" className="" />
                    </div>
                    <div id="feature" className="flex flex-col justify-center mx-2.5 lg:w-2/4 lg:ml-16">
                        <h1 className=" font-extrabold text-xl lg:text-2xl">{t('Open')}</h1>
                        <p className="font-light text-gray-600 text-justify mt-5">{t('TheValue')}</p>
                        <h1 className="font-extrabold text-xl lg:text-2xl mt-10">{t('LimitlessAccess')}</h1>
                        <p className="font-light text-gray-600 text-justify mt-5">{t('MontWill')}</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex lg:flex-row lg:justify-around">
                <div className="flex flex-col mx-2.5 mt-36 lg:w-2/4">
                    <h1 className="font-extrabold text-xl lg:text-2xl">{t('MoneyFor')}</h1>
                    <p className="font-light text-gray-600 mt-5 lg:w-2/3">{t('MontCombiness')}</p>
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