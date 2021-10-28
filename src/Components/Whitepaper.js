import React from 'react'

const Whitepaper = () => {
    return(
        <div className="container mx-auto pb-10 pt-10">
                <div className="flex flex-col lg:flex lg:flex-row lg:justify-around items-center">
                    <div className="flex flex-col justify-center mx-2.5 lg:w-2/4">
                        <h1 className="font-extrabold text-xl lg:text-2xl">Техник, Технологи Эдийн Засгийн Үндэслэл (Whitepaper)</h1>
                        {/* <p className="font-light text-gray-600 mt-5 lg:w-2/3">Крипто зах зээлд төгрөгийн үнэ цэнийг төлөөлөх хэрэгсэл болох MONT-ийн Техник, Технологи Эдийн Засгийн Үндэслэл (Whitepaper)-тэй дараах холбоосоор танилцаарай</p> */}
                    </div>
                    <div className="mt-20 lg:mt-0">
                        <a className="p-10 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" target="_blank" href="https://drive.google.com/file/d/1TvWMfj1RFzFOiw6PYEIkuxMjCGmgBYaj/view?usp=sharing">White paper</a>
                    </div>
                </div>
            </div>
    )
}

export default Whitepaper