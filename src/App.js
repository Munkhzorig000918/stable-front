import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import EcoSystem from "./Components/Ecosystem";
import MyTeam from "./Components/Myteam";
import Video from "./Components/Video";
import Footer from "./Components/Footer";
import Accordion from "./Components/Accordion";


function App() {
  return (
    <div className=" overflow-x-hidden">
        <Header />
        <Banner />
        <Feature />
        <EcoSystem />
        <MyTeam />
        {/* <Video /> */}
        <Accordion />
        <Footer />
    </div>
  );
}

export default App;
