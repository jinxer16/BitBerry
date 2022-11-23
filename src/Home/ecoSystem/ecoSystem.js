import React,{useEffect, useState} from "react";
import ecosystem from "../../Assets/Images/ecosystem.png";
import image1 from "../../Assets/Images/pic1-01.png";
import image2 from "../../Assets/Images/pic2-01.png";
import image3 from "../../Assets/Images/pic3-01.png";
import image4 from "../../Assets/Images/pic4-01.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import Bottomline from "../../Assets/Images/Vector 26.png";
import SrcollLine from "../../Assets/MobileImage/Group87.png"
import "./ecoSystem.css";
function EcoSystem() {
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  useEffect(() => {
     let interval = setInterval(() => {
      setAnimationState(prevState=>  !prevState)
      setAnimationState1(prevState=>  !prevState)
    }, 2000);
    return ()=> clearInterval(interval)
  }, [])
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
          {/* <div className="zoom-in-out-box"> BITBERRY ECOSYSTEM</div> */}
          <div className="color-bright">
                  <span className={animationState ?"header header--pushDownOne" : "header"}>BITBERRY</span>
                  &nbsp;
                  <span className={animationState1 ?"header header--pushDownTwo" : "header"}>ECOSYSTEM</span>
                </div>
        </div>
      </div>
      <div className="row squareBgImg imgContainer">
        <div className="col-8 ecomain mt-5">
          <div className="row imgContainer2 ">
            <div className="col-md-3 col-12 p-3 hover13" 
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
              <figure>
                <img src={image1} className="img-fluid" />
              </figure>
              <div className="mt-4 centerEco">
                <p className="eco-heading">LAUNCH PAD</p>
                <img src={Bottomline} className="img-fluid" />
                <p className="eco-para">
                  A launchpad that helps webtoon artists fund and grow their
                  community for their projects.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12  p-3 hover13" 
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
              <figure>
                <img src={image2} className="img-fluid" />
              </figure>
              <div className="mt-4 centerEco">
                <p className="eco-heading"> NFT P2E GAME</p>
                <img src={Bottomline} className="img-fluid" />

                <p className="eco-para">
                  NFT trading cards will be airdropped to all holders. These
                  cards will be usable in our play-to-earn game.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12 p-3 hover13" 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
              <figure>
                <img src={image3} className="img-fluid" />
              </figure>
              <div className="mt-4 centerEco">
                <p className="eco-heading">BITBERRY WALLET</p>
                <img src={Bottomline} className="img-fluid" />

                <p className="eco-para">
                  Bitberry wallet is more than just a wallet. It’s your secure,
                  easy, and seamless gateway to the Crypto & NFT world.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12 p-3 hover13" 
            data-aos="fade-up-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
              <figure>
                <img src={image4} className="img-fluid" />
              </figure>
              <div className="mt-4 centerEco">
                <p className="eco-heading">Multi-Chain NFTs</p>
                <img src={Bottomline} className="img-fluid" />
                <p className="eco-para">
                  The platform to deliver powerful NFT experiences that scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{width:"70%"}}
        >
          <div className="row imgContainer2 "  >
          <div class="carousel-inner">
            <div class="carousel-item active   ">
            <div className="col-12  p-3 hover13">
              <figure>
                <img src={image1} className="img-fluid" />
              </figure>
              <div className="mt-4 centerEco  ">
                <p className="eco-heading">LAUNCH PAD</p>
                <img src={Bottomline} className="img-fluid" />
                <p className="eco-para">
                  A launchpad that helps webtoon artists fund and grow their
                  community for their projects.
                </p>
              </div>
            </div>
            </div>
            <div class="carousel-item  ">
            <div className="col-12 p-3 hover13">
              <figure>
                <img src={image2} className="img-fluid" />
              </figure>
              <div className="mt-4 centerEco">
                <p className="eco-heading"> NFT P2E GAME</p>
                <img src={Bottomline} className="img-fluid" />

                <p className="eco-para">
                  NFT trading cards will be airdropped to all holders. These
                  cards will be usable in our play-to-earn game.
                </p>
              </div>
            </div>
            </div>
            <div class="carousel-item  ">
            <div className="col-12 p-3 hover13">
              <figure>
                <img src={image3} className="img-fluid" />
              </figure>
              <div className="mt-4 centerEco">
                <p className="eco-heading">BITBERRY WALLET</p>
                <img src={Bottomline} className="img-fluid" />
                <p className="eco-para">
                  Bitberry wallet is more than just a wallet. It’s your secure,
                  easy, and seamless gateway to the Crypto & NFT world.
                </p>
              </div>
            </div>
            </div>
            <div class="carousel-item  ">
            <div className="col-12 p-3 hover13">
              <figure>
                <img src={image4} className="img-fluid" />
              </figure>
              <div className="mt-4 centerEco">
                <p className="eco-heading">Multi-Chain NFTs</p>
                <img src={Bottomline} className="img-fluid" />
                <p className="eco-para">
                  The platform to deliver powerful NFT experiences that scale.
                </p>
              </div>
            </div>
           

            </div>
          </div>
          <div className=" container text-center">
          <img src={SrcollLine}  className="img-fluid" alt="hello"/>
        </div>
        </div>
         <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default EcoSystem;