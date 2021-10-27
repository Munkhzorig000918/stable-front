import React from "react";

const Footer = () => {
    return(
        <div className="w-full bg-gray-800">
            <div className="container mx-auto py-10">
                <div className="flex flex-col lg:flex lg:flex-row lg:justify-between">
                    <div className="lg:w-2/4 flex items-center justify-center">
                        <h1 className="lg:pl-14 text-5xl text-center text-white">MONT</h1>
                    </div>
                    <div className="mx-2.5 lg:w-3/4 mt-5">
                        <p className="text-white lg:text-justify text-sm">Дижитал хөрөнгө нь үнийн хэлбэлзэл зэрэг олон эрсдэлтэй байдаг. Дижитал хөрөнгийн гүйлгээ нь ихээхэн алдагдалд хүргэж болзошгүй бөгөөд зарим хэрэглэгчдэд тохиромжгүй байж магадгүй юм. Дижитал хөрөнгийн зах зээл болон биржүүд нь бусад төрлийн санхүүгийн бүтээгдэхүүнтэй ижил хяналт эсвэл хэрэглэгчийн хамгаалалтаар зохицуулагддаггүй бөгөөд хувьсан өөрчлөгдөж буй зохицуулалтын орчинд захирагддаг. Дижитал хөрөнгө нь ихэвчлэн хууль ёсны тендерийн статустай байдаггүй бөгөөд хадгаламж хамгаалах даатгалд хамрагддаггүй. Дижитал хөрөнгийн өмнөх гүйцэтгэл нь ирээдүйн гүйцэтгэлийн удирдамж биш, ирээдүйн үр дүн эсвэл гүйцэтгэлийн найдвартай үзүүлэлт биш юм. Нэмэлт тодруулгыг Хуулийн болон Нууцлалын хуудаснаас авах боломжтой.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer