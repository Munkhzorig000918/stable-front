import React from "react";
import bg3 from "../assets/bg2.png"
import { Trans, useTranslation } from "react-i18next";

const EcoSystem = () => {

    const { t, i18n } = useTranslation();

    return(
        <div id="service" className="w-full pt-10 pb-10 lg:py-40" style={{ backgroundImage: `url(${bg3})` , backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="flex justify-center items-center flex-col">
                <div className="">
                    <h1 className="text-white text-center mx-0.5 font-extrabold text-3xl lg:text-5xl">{t('MONTStable')}</h1>
                </div>
                <div className="lg:w-4/6">
                    <p className="text-white text-center text-sm font-normal lg:text-2xl mt-20 mx-2">{t('MontIs')}</p>
                </div> 
            </div>
        </div>
    )
}

export default EcoSystem;