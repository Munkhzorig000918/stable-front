import React from "react";
import bg3 from "../assets/bg2.png"

const EcoSystem = () => {
    return(
        <div className="w-full pt-10 pb-10 lg:py-60" style={{ backgroundImage: `url(${bg3})` , backgroundRepeat: "no-repeat", backgroundSize: "2000px 504px"}}>
            <div className="flex justify-center items-center flex-col">
                <div className="">
                    <h1 className="text-white text-center mx-0.5 text-3xl lg:text-5xl">MONT үнийн савалгаагүй.</h1>
                </div>
                <div className="lg:w-4/6">
                    <p className="text-white text-center text-sm lg:text-xl mt-5">Монгол төгрөгт аргамжсан стэйблкойн учир крипто зах зээлийн савалгаанаас ангид юм. Энэхүү үнийн харьцангуй тогтвортой байдал нь крипто арилжаа хийх эрсдэлийг бууруулах болно.</p>
                </div> 
            </div>
        </div>
    )
}

export default EcoSystem;