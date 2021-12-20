import React from "react";
import './underline.css'
import Bg from '../assets/back.gif'
import Coin from '../assets/coin.png'
import Hamburger from "./hamburger";
import LazyLoad from 'react-lazyload';
import logo from "../assets/logo.png"
import { Trans, useTranslation } from "react-i18next";
import i18n from "../i18next";
import { Fragment, useEffect, useRef, useState } from 'react'
import {FaAngleDown} from 'react-icons/fa'
import { Menu, Transition } from '@headlessui/react'
import { FaTimes, FaAlignJustify } from "react-icons/fa";

const Header = () =>{

    function EditInactiveIcon(props) {
        return (
          <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 13V16H7L16 7L13 4L4 13Z"
              fill="#EDE9FE"
              stroke="#A78BFA"
              strokeWidth="2"
            />
          </svg>
        )
      }
      
      function EditActiveIcon(props) {
        return (
          <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 13V16H7L16 7L13 4L4 13Z"
              fill="#8B5CF6"
              stroke="#C4B5FD"
              strokeWidth="2"
            />
          </svg>
        )
      }

      function DuplicateInactiveIcon(props) {
        return (
          <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H12V12H4V4Z"
              fill="#EDE9FE"
              stroke="#A78BFA"
              strokeWidth="2"
            />
            <path
              d="M8 8H16V16H8V8Z"
              fill="#EDE9FE"
              stroke="#A78BFA"
              strokeWidth="2"
            />
          </svg>
        )
      }
      
      function DuplicateActiveIcon(props) {
        return (
          <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H12V12H4V4Z"
              fill="#8B5CF6"
              stroke="#C4B5FD"
              strokeWidth="2"
            />
            <path
              d="M8 8H16V16H8V8Z"
              fill="#8B5CF6"
              stroke="#C4B5FD"
              strokeWidth="2"
            />
          </svg>
        )
      }
      
      function ArchiveInactiveIcon(props) {
        return (
          <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5"
              y="8"
              width="10"
              height="8"
              fill="#EDE9FE"
              stroke="#A78BFA"
              strokeWidth="2"
            />
            <rect
              x="4"
              y="4"
              width="12"
              height="4"
              fill="#EDE9FE"
              stroke="#A78BFA"
              strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
          </svg>
        )
      }
      
      function ArchiveActiveIcon(props) {
        return (
          <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5"
              y="8"
              width="10"
              height="8"
              fill="#8B5CF6"
              stroke="#C4B5FD"
              strokeWidth="2"
            />
            <rect
              x="4"
              y="4"
              width="12"
              height="4"
              fill="#8B5CF6"
              stroke="#C4B5FD"
              strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
          </svg>
        )
      }
      
      function MoveInactiveIcon(props) {
        return (
          <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
          </svg>
        )
      }
      
      function MoveActiveIcon(props) {
        return (
          <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
          </svg>
        )
      }
      
      function DeleteInactiveIcon(props) {
        return (
          <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5"
              y="6"
              width="10"
              height="10"
              fill="#EDE9FE"
              stroke="#A78BFA"
              strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
          </svg>
        )
      }
      
      function DeleteActiveIcon(props) {
        return (
          <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5"
              y="6"
              width="10"
              height="10"
              fill="#8B5CF6"
              stroke="#C4B5FD"
              strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
          </svg>
        )
      }
      

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
                <div className="block xl:hidden">
                  <div className="relative flex items-center justify-between">
                      <div className="lg:hidden flex space-x-3">
                          <button className="flex items-center ">
                              <FaAlignJustify className="text-white w-7 h-7" />
                          </button>
                      </div>
                  </div>
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
                   
                </ul>
                <div className="w-56 hidden xl:block">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                        <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            {t('More')}
                            <FaAngleDown />
                        </Menu.Button>
                        </div>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                            
                            </div>
                            <div className="px-1 py-1">
                            <Menu.Item onClick={() => changeLanguage("mn")}>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-violet-500 text-gray-300' : 'text-gray-900'
                                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >   
                                    <button >{t('Mongolia')}</button>
                                </button>
                                )}
                            </Menu.Item>
                            <Menu.Item onClick={() => changeLanguage("en")}>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-violet-500 text-gray-300' : 'text-gray-900'
                                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    <button >{t('English')}</button>
                                </button>
                                )}
                            </Menu.Item>
                            </div>
                            <div className="px-1 py-1">
                            <a href="/whitepaper.pdf" target='_blank'>
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-violet-500 text-gray-300' : 'text-gray-900'
                                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    WhitePaper
                                </button>
                                )}
                            </Menu.Item>
                            </a>
                            </div>
                        </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                </nav>
            
                <Hamburger />
            
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