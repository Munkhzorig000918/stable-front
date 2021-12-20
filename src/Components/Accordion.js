import React from "react";
import './accordion.css'
import { FaAngleDown } from "react-icons/fa";
import Bubble from '../assets/Frame.png'
import {Disclosure, Transition} from '@headlessui/react';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs';
import { Trans, useTranslation } from "react-i18next";

const Accordion = () => {

  const { t, i18n } = useTranslation();

    return(
    <div id="faq" className="w-full px-4 pt-16 pb-16">
      <div className="container p-2 mx-auto rounded-2xl">
          <h1 className="font-bold md:text-3xl mb-10 text-lg">{t('FAQ')}</h1>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">{t('WhatIs')}</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                {t('AStableCoin')}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">{t('WhatIsMont')}</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                {t('MONTisA')}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">{t('WichBlockChain')}</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                {t('CurrentlyMont')}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">{t('HowMuch')}</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                {t('Since')}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">{t('HowCan')}</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                {t('YouCan')}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">{t('HowTransfer')}</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                 {t('YouCanBuy')}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">{t('WhyMont')}</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                {t('MontIsThe')}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
    )
}

export default Accordion