import React from "react";
import footerimgback from "../../Assets/Images/Rectangle18.png";
import bit from "../../Assets/Images/logo.svg";
import social from "../../Assets/Images/telegramIcon.png";
import social1 from "../../Assets/Images/twitterIcon.png";
import social2 from "../../Assets/Images/discordIcon.png";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="contianer footer footerSec d-flex align-items-center">
        <img src={footerimgback} className="backImg" alt="" />
        <div className="row w-100  ">
          <div className="col-md-6 footerRight ">
            <img src={bit} alt="" />
            <span className="textSpanFooter">
              &copy; 2022 bitberry. All rights reserved
            </span>
          </div>
          <div className="col-md-4  footerLeft">
            <div className="row rowInFooter  ">
              <div className="col-lg-4 col-md-6 colWise ps-sm-5 mt-2">
                <h3 className="txtHeading">sitemap</h3>
                <span className="textSpanFooter">Home</span>
                <span className="textSpanFooter">About us</span>
                <span className="textSpanFooter">How we work</span>
                <span className="textSpanFooter">Documents</span>
                <span className="textSpanFooter">Team</span>
                <span className="textSpanFooter">Roadmap</span>
              </div>
              <div className="col-lg-4 col-md-4 colWise mt-2 ">
                <h3 className="txtHeading">ecosystem</h3>
                <span className="textSpanFooter">Tokenomic</span>
                <span className="textSpanFooter">About us</span>
                <span className="textSpanFooter">Launchpad</span>
                <span className="textSpanFooter">LP Pool</span>
              </div>
              <div className="col-lg-4 col-md-6 colWise mt-2">
                <h3 className="txtHeading">community</h3>
                <div className="d-flex gap-3">
                  <img
                    className="img-fluid"
                    width={"30px"}
                    height={"30px"}
                    src={social}
                    alt=""
                  />
                  <img
                    className="img-fluid"
                    width={"30px"}
                    height={"30px"}
                    src={social1}
                    alt=""
                  />
                  <img
                    className="img-fluid"
                    width={"30px"}
                    height={"30px"}
                    src={social2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  footerSecMobile d-flex g-0">
        <img src={footerimgback} className="backImgMobile" alt="" />
        <div className="footerMobile ">
          <div className="row  d-flex justify-content-center">
            <div className="col-8">
              <img src={bit} alt="" className="imgFooterMobile" />
            </div>
          </div>
          <div className="row ">
            <h3 className="txtHeading ms-2">sitemap</h3>
            <div className="col-4 footerMobile txtHeading">
              <span className="textSpanMobileFooter ms-2">Home</span>
            </div>

            <div className="col-4 footerMobile txtHeading">
              <span className="textSpanMobileFooter">About us</span>
            </div>
            <div className="col-4 footerMobile txtHeading">
              <span className="textSpanMobileFooter">How we work</span>
            </div>
            <div className="col-4 footerMobile txtHeading">
              <span className="textSpanMobileFooter ms-2">Documents</span>
            </div>

            <div className="col-4 footerMobile txtHeading">
              <span className="textSpanMobileFooter">Team</span>
            </div>
            <div className="col-4 footerMobile txtHeading">
              <span className="textSpanMobileFooter">Roadmap</span>
            </div>
          </div>
          <div className="row ">
            <h3 className="txtHeading ms-2">ecosystem</h3>
            <div className="col-4 footerMobile txtHeading">
              <span className="textSpanMobileFooter ms-2">Tokenomic</span>
            </div>

            <div className="col-4 footerMobile txtHeading">
              <span className="textSpanMobileFooter"> LP Pool</span>
            </div>
            <div className="col-4 footerMobile txtHeading">
              <span className="textSpanMobileFooter">Launchpad</span>
            </div>
          </div>
          <div className="row ">
            <h3 className="txtHeading ms-2">community</h3>
            <div className="col-4 footerMobile txtHeading d-flex gap-3 ms-2">
              <img
                className="img-fluid"
                width={"30px"}
                height={"30px"}
                src={social}
                alt=""
              />
              <img
                className="img-fluid"
                width={"30px"}
                height={"30px"}
                src={social1}
                alt=""
              />
              <img
                className="img-fluid"
                width={"30px"}
                height={"30px"}
                src={social2}
                alt=""
              />
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-12 justify-content-center d-flex">
              <h3 className="textSpanMobileFooter ">
                &copy; 2022 bitberry. All rights reserved
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
