import React from "react";
import { FaFacebook ,FaTwitter } from "react-icons/fa"
import { FaInstagram, FaMailBulk } from "react-icons/fa"
// import { FaFacebook } from "react-icons/fa";
import logo from "../assets/logo.png"
import Certik from "../assets/certik.png"


const Footer = () => {
    return( 
        
     <div id="contact" className="bg-gray-900 text-white pt-12 pb-8 px-4">
	<div className="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
		<a href="#" className="block mr-4 w-1/3"><img className="w-40" src={logo} /></a>
		<div className="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
			<ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
				<li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Бүтээгдэхүүн</li>
				<li><a href="#feature" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Онцлог</a></li>
				<li><a href="#service" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Үйлчилгээ</a></li>
				<li><a href="#team" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Төслийн баг</a></li>
				<li><a href="#company" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Хамтрагч байгууллагууд</a></li>
				<li><a href="#faq" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Түгээмэл асуулт</a></li>
			</ul>
			<ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
				<li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Хамтрагч байгууллагууд</li>
				<li><a href="https://www.grapecity.mn/" target="_blank" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">GrapeCity Mongolia LLC</a> </li>
                <li><a href="https://dsolutions.mn/" target="_blank" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Diverse Solutions LLC</a> </li>
                <li><a href="https://ardholdings.com/mn/" target="_blank" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Ard Financial Group</a> </li>
                <li><a href="https://dax.mn/" target="_blank" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Dax.mn</a> </li>
                <li><a href="https://www.complex.mn/" target="_blank" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Complex.mn</a> </li>
                <li><a href="https://trade.mn/" target="_blank" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Trade.mn</a> </li>
				<li><a href="https://www.coinhub.mn/" target="_blank" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Coinhub.mn</a> </li>
				<li><a href="https://www.tngr.media/?fbclid=IwAR3f6icn-ZP4E2BluAvoeIEAs9kXV3Ala0woDLNAHJgjjJ-_6oCgg8IHXR8" target="_blank" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Tenger League Media Group</a> </li>
			</ul>
			
            
			<div className="text-gray-700 flex flex-col w-full">
				<div className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Холбоо барих</div>
				<div className="flex pl-4 justify-start mt-2">
					<span className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline">
						<FaFacebook />
					</span>
					<span className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline">
						<FaInstagram />
					</span>
					<span className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline">
						<FaTwitter />
					</span>
					<a className="block flex items-center text-gray-300 hover:text-white no-underline" href="mailto:info@stablecoin.mn">
						<FaMailBulk />
					</a>
				</div>
				<div className="flex flex-col pl-4 items-center justify-start mt-10">
					<img src={Certik} />
					<span className="block flex text-md items-center text-xl text-gray-300 hover:text-white mr-6 no-underline">
						Audited by CertiK
					</span>
					
				</div>
			</div>
		</div>
	    
        </div>       
    </div>
    )
}

export default Footer