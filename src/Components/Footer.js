import React from "react";
import { FaFacebook ,FaTwitter } from "react-icons/fa"
import { FaInstagram, FaMailBulk } from "react-icons/fa"
// import { FaFacebook } from "react-icons/fa";
import logo from "../assets/logo.png"

const Footer = () => {
    return( 
        
     <div id="contact" className="bg-gray-900 text-white pt-12 pb-8 px-4">
	<div className="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
		<a href="#" className="block mr-4 w-1/3"><img className="w-40" src={logo} /></a>
		<div className="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
			<ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
				<li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Бүтээгдхүүн</li>
				<li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Онцлог</a></li>
				<li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Төслийн баг</a></li>
				<li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Түгээмэл асуулт</a></li>
			</ul>
			<ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
				<li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Хамтрагч байгууллагууд</li>
				<li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">GrapCity</a> </li>
                <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Diverse Solutions</a> </li>
                <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">ARD</a> </li>
                <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">DAX</a> </li>
                <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Complex</a> </li>
                <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Tade</a> </li>
			</ul>
			
            
			<div className="text-gray-700 flex flex-col w-full">
				<div className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Холбоо барих</div>
				<div className="flex pl-4 justify-start mt-2">
					<a className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" target="_blank" href="https://www.facebook.com/">
						<FaFacebook />
					</a>
					<a className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" target="_blank" href="https://www.instagram.com/">
						<FaInstagram />
					</a>
					<a className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" target="_blank" href="https://twitter.com/">
						<FaTwitter />
					</a>
					<a className="block flex items-center text-gray-300 hover:text-white no-underline" href="mailto:info@stablecoin.mn">
						<FaMailBulk />
					</a>
				</div>
			</div>
		</div>
	    
        </div>       
    </div>
    )
}

export default Footer