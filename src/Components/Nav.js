import React from 'react'
import Logo from '../assets/logo.png'
import { Trans, useTranslation } from "react-i18next";
import Hamburger from './hamburger';

const Nav = () => {

  const changeLanguage = (language) => {
  i18n.changeLanguage(language);
  };

  const { t, i18n } = useTranslation();

  return (
    <div className='w-full'>
        <nav className="px-2 py-4" style={{backgroundColor: '#1a202c'}}>
          <div className="flex items-center justify-between">
            <div className='flex items-center justify-center'>
              <a href="#">
                  <img className='w-10' src={Logo} />
              </a>
            </div>
            <div className="hidden xl:block w-full md:w-auto mx-10">
              <ul className="flex-row flex space-x-5">
                <li>
                  <a href="#" className="text-white xl:text-blue-700  rounded" aria-current="page">{t('Home')}</a>
                </li>
                <li>
                  <a href="#feature" className="text-white">{t('Benefit')}</a>
                </li>
                <li>
                  <a href="#service" className="text-white">{t('Service')}</a>
                </li>
                <li>
                  <a href="#team" className="text-white">{t('ProjectTeam')}</a>
                </li>
                <li>
                  <a href="#company" className="text-white">{t('Partners')}</a>
                </li>
                <li>
                  <a href="#faq" className="text-white">{t('FAQ')}</a>
                </li>
                <li>
                  <a href="#contact" className="text-white">{t('ContactUs')}</a>
                </li>
                <li>
                  <a href="https://bscscan.com/token/0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4" target='_blank' className="text-white">{t('BsScan')}</a>
                </li>
              </ul>
            </div>
            
            <div className='flex items-center justify-center mx-5 space-x-5 text-white'>
              <a className=' w-24 text-center rounded-lg flex items-center justify-center h-7 bg-blue-500' href='/whitepaper.pdf' target='_blank'>
                WhitePaper
              </a>
              <h1 className=' cursor-pointer bg-blue-500 hover:text-blue-200 p-2 rounded-lg' onClick={() => changeLanguage("mn")}>MN</h1>
              <h1 className=' cursor-pointer bg-blue-500 hover:text-blue-200 p-2 rounded-lg' onClick={() => changeLanguage("en")}>EN</h1>
              <Hamburger />
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Nav;
