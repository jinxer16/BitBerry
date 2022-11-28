import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Home/header/header";
import Footer from "./Home/footer/footer";
import Home from "./Home/Home";
import LuckyDraw from "./components/luckyDraw/LuckyDraw";
import AOS from "aos";
import "aos/dist/aos.css";
import Lp_Pool from "./components/LpPool/Lp_Pool";
import NftTransfer from "./components/nftTransfer/nftTransfer";
import NftTicket from "./components/nftTicket/nftTicket";
import MyNFT from "./components/myNFT/myNFT";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/luckydraw" element={<LuckyDraw />} />
          <Route exact path="/lpPool" element={<Lp_Pool />} />
          <Route exact path="/nftTransfer" element={<NftTransfer />} />
          <Route exact path="/nftTicket" element={<NftTicket />} />
          <Route exact path="/myNft" element={<MyNFT />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
