import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import EcoSystem from "./Components/Ecosystem";
import MyTeam from "./Components/Myteam";
import Video from "./Components/Video";
import Footer from "./Components/Footer";
import Accordion from "./Components/Accordion";
import Ourcompany from "./Components/Ourcompany";
import Whitepaper from "./Components/Whitepaper";


function App() {
  return (
    <div className=" overflow-x-hidden bg-dax-gray overscroll-contain">
        <Header />
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
