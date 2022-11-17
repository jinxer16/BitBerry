import React from "react";
import ecosystem from "../../Assets/Images/ecosystem.png";
import image1 from "../../Assets/Images/pic1-01.png";
import image2 from "../../Assets/Images/pic2-01.png";
import image3 from "../../Assets/Images/pic3-01.png";
import image4 from "../../Assets/Images/pic4-01.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import Bottomline from "../../Assets/Images/inputBottomLine.png";
import "./ecoSystem.css";
function EcoSystem() {
  return (
    <div className="contianer ecoSystem mt-5 mb-5">
      <div className="row ">
        <div className="col-md-12 ps-5 pe-5">
          <img src={ecosystem} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 col-10 subHeading-ecosystem mx-auto">
          <img src={Circle} width={"40px"} className="ecoRoadmap" />
          BITBERRY ECOSYSTEM
        </div>
      </div>
      <div className="row  squareBgImg imgContainer">
        <div className="col-8 mt-5">
          <div className="row imgContainer2 ">
            <div className="col-md-3 ">
              <img src={image1} className="img-fluid" />
              <div className="mt-4">
                <p className="eco-heading">LAUNCH PAD</p>
                <img src={Bottomline} className="img-fluid" />
                <p className="eco-para">
                  A launchpad that helps webtoon artists fund and grow their
                  community for their projects.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img src={image2} className="img-fluid" />
              <div className="mt-4">
                <p className="eco-heading">LAUNCH PAD</p>
                <img src={Bottomline} className="img-fluid" />

                <p className="eco-para">
                  NFT trading cards will be airdropped to all holders. These
                  cards will be usable in our play-to-earn game.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img src={image3} className="img-fluid" />
              <div className="mt-4">
                <p className="eco-heading">LAUNCH PAD</p>
                <img src={Bottomline} className="img-fluid" />

                <p className="eco-para">
                  Bitberry wallet is more than just a wallet. It’s your secure,
                  easy, and seamless gateway to the Crypto & NFT world.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img src={image4} className="img-fluid" />
              <div className="mt-4">
                <p className="eco-heading">LAUNCH PAD</p>
                <img src={Bottomline} className="img-fluid" />
                <p className="eco-para">
                  The platform to deliver powerful NFT experiences that scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcoSystem;
