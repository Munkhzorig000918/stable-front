import React from "react";
import './accordion.css'
import { FaAngleDown } from "react-icons/fa";
import Bubble from '../assets/Frame.png'
import {Disclosure, Transition} from '@headlessui/react';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs';

const Accordion = () => {
    return(
    <div id="faq" className="w-full px-4 pt-16 pb-16">
      <div className="container p-2 mx-auto rounded-2xl">
          <h1 className="font-bold md:text-3xl mb-10 text-lg">Түгээмэл асуулт хариулт</h1>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">Стэйблкойн гэж юу вэ?</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                Стэйблкойн нь валютын нөөцөөр баталгаажсан, үнэ цэнийг энгийн хэрэглээний валюттай аргамжсан криптовалютын төрөл юм.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">MONT гэж юу вэ?</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                MONT нь Монгол төгрөгт аргамжсан стэйблкойн юм.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">MONT нь аль блокчэйн платформд байршсан бэ?</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                MONT нь Binance Smart Chain болон Ethereum блокчэйн сүлжээнд байршсан бөгөөд удалгүй Solana, Cardano зэрэг блокчэйнд нэвтрэх ажил хийгдэж байна.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">MONT нь ямар үнэ цэнтэй бэ?</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                MONT нь ямагт Монгол төгрөгтэй 1:1 харьцах үнэ цэнтэй байх болно.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">Хэрхэн MONT худалдаж авах вэ?</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                Та MONT-ыг өөрийн үйлчлүүлдэг виртуал хөрөнгийн биржийн арилжаагаар авах боломжтой. Бид MONT-ыг дотоод болон гадаадын олон биржид нэвтрүүлэхээр ажиллаж байна.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">Хэрхэн MONT-ыг шилжүүлэх вэ?</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                 Та MONT-ыг өөрийн үйлчлүүлдэг бирж эсвэл хэтэвчээр дамжуулан шилжүүлэх боломжтой. Та шилжүүлэг хийхээсээ өмнө зөв сүлжээг (BEP-20, ERC-20, г.м) ашиглаж байгаагаа дахин нягтлаарай.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-sm font-medium text-left rounded-lg hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-md lg:text-xl">Яагаад MONT гэж?</span>
                <BsChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-700">
                MONT нь Монгол хүн хэрэглэхэд хамгийн дөхөм, найдвартай, аюулгүй стэйблкойн юм. MONT-ийн аюулгүй байдалд олон улсын блокчэйн аудитын компани болох Certik аудит хийн баталгаажуулсан болно.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
    )
}

export default Accordion