import React from "react";
import bg3 from "../assets/bg2.png"

const EcoSystem = () => {
    return(
        <div className="w-full pt-10 pb-10 lg:py-40" style={{ backgroundImage: `url(${bg3})` , backgroundRepeat: "no-repeat", backgroundSize: "2000px 504px"}}>
            <div id="service" className="flex justify-center items-center flex-col">
                <div className="">
                    <h1 className="text-white text-center mx-0.5 font-extrabold text-3xl lg:text-5xl">MONT-ийн үнэ хэлбэлзэхгүй</h1>
                </div>
                <div className="lg:w-4/6">
                    <p className="text-white text-center text-sm font-normal lg:text-2xl mt-20">MONT нь Монгол төгрөгт аргамжсан стэйблкойн учир крипто зах зээлийн хэлбэлзэлээс ангид юм. Энэхүү үнийн харьцангуй тогтвортой байдал нь ханшаас үүсэх эрсдэлийг бууруулна.</p>
                </div> 
            </div>
        </div>
    )
}

export default EcoSystem;