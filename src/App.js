import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Feature from "./Components/Feature";
import EcoSystem from "./Components/Ecosystem";
import MyTeam from "./Components/Myteam";
import Video from "./Components/Video";
import Footer from "./Components/Footer";
import Accordion from "./Components/Accordion";
import Ourcompany from "./Components/Ourcompany";
import Bg from './assets/back.gif'
import Whitepaper from "./Components/Whitepaper";
import './i18next'
import { Trans, useTranslation } from "react-i18next";
import Coin from './assets/coin.png'

function App() {
  
  const { t, i18n } = useTranslation();

  return (
    <div className=" overflow-x-hidden bg-dax-gray overscroll-contain">
        <Nav />
        <div className="w-full py-32 xl:py-64" style={{ backgroundImage: `url(${Bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="container mx-auto">
                <div className="flex items-center mx-2.5">
                    <div className="xl:pl-14">
                        <h1 className="font-bold text-xl xl:text-6xl xl:w-4/5 text-white italic font-sans">{t('VirtualMoney')}</h1>
                        <span className="font-light xl:w-2/6 text-white mt-5 hidden sm:block"><strong className=" font-bold"><i>{t('MoreSimple')}</i></strong> {t('Opportunity')}</span>
                    </div> 
                    <div className="mb-10 ">
                        <img className="sm:hidden block" src={Coin} />
                    </div>
                </div>
            </div>
          </div>
        <Banner />
        <Feature />
        <EcoSystem />
        <MyTeam />
        <Ourcompany  />
        {/* <Video /> */}
        <Accordion />
        {/* <Whitepaper /> */}
        <Footer />
    </div>
  );
}

export default App;
