import React from "react";
import './underline.css'
import Bg from '../assets/back.gif'
import Coin from '../assets/coin.png'
import Hamburger from "./hamburger";
import LazyLoad from 'react-lazyload';
import logo from "../assets/logo.png"
import { Trans, useTranslation } from "react-i18next";
import i18n from "../i18next";

document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    //asd

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});



const Header = () =>{
    

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    const { t, i18n } = useTranslation();
    

    return(
        <LazyLoad height={200} once>
        <div className="w-full" style={{ backgroundImage: `url(${Bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            
            <nav className="fixed px-4 py-4 flex justify-between items-center z-20 bg-gray-900 w-full">
                <a className="text-3xl font-bold leading-none text-white" href="#">
                    <img src={logo} className="w-10" />
                </a>
                <div className="xl:hidden">
                    <button className="navbar-burger flex items-center text-blue-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden fixed left-32 transform -translate-y-1/2 -translate-x-1/2 xl:mx-auto xl:flex xl:items-center xl:w-auto xl:space-x-4">
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">{t('Home')}</a></li>
                    <li className="text-gray-300">
                        
                    </li>
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#feature">{t('Benefit')}</a></li>
                    <li className="text-gray-300">
                        
                    </li>
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#service">{t('Service')}</a></li>
                    <li className="text-gray-300">
                        
                    </li>
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#team">{t('ProjectTeam')}</a></li>
                    <li className="text-gray-300">
                        
                    </li>
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#company">{t('Partners')}</a></li>
                    <li className="text-gray-300">
                        
                    </li>
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#faq">{t('FAQ')}</a></li>
                    <li className="text-gray-300">
                        
                    </li>
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#contact">{t('ContactUs')}</a></li>
                    <li className="text-gray-300">
                        
                    </li>
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" target="_blank" href="https://bscscan.com/token/0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4">BscScan</a></li>
                    <li className="space-x-5">
                        <button onClick={() => changeLanguage("mn")}>MN</button>
                        <button onClick={() => changeLanguage("en")}>EN</button>
                    </li>
                </ul>
                
                <a className="hidden xl:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" target="_blank" href="whitepaper.pdf">White paper</a>
            </nav>
            <div className="z-50">
                <Hamburger />
            </div>
                <div className="w-full py-32 xl:py-64">
                    <div className="container mx-auto">
                        <div className="flex items-center mx-2.5">
                            <div className="xl:pl-14">
                                <h1 className="font-bold text-xl xl:text-6xl xl:w-4/5 text-white italic font-sans">{t('VirtualMoney')}</h1>
                                <span className="font-light xl:w-2/6 text-white mt-5 hidden sm:block"><strong className=" font-bold"><i>{t('MoreSimple')}</i></strong> {t('Opportunity')}</span>
                            </div> 
                            <div className="mb-10 ">
                                <img className="sm:hidden block animate-bounce" src={Coin} />
                            </div>
                        </div>
                    </div>
                 </div>
        </div>
        </LazyLoad>
    )
}

export default Header;