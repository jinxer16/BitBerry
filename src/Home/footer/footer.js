import React from "react";
import footerimg from "../../Assets/Images/Rectangle17.png";
import footerimgback from "../../Assets/Images/Rectangle18.png";
import bit from "../../Assets/Images/logo.svg";
import social from "../../Assets/Images/Vector.png";
import social1 from "../../Assets/Images/Vector1.png";
import social2 from "../../Assets/Images/Vector2.png";
import "./footer.css";
function Footer() {
  return (
    <div className="contianer footer d-flex align-items-center">
      <img src={footerimgback} className="backImg" />
      <div className="row w-100 ">
        <div className="col-md-6  footerRight ">
          <img src={bit} />
          {/* <h3 className="txtHeading">BitBerry</h3> */}
          <span className="textSpanFooter">
            &copy; 2022 bitberry. All rights reserved
          </span>
        </div>
        <div className="col-md-4  footerLeft">
          <div className="row rowInFooter">
            <div className="col-md-4 colWise">
              <h3 className="txtHeading">sitemap</h3>
              <span className="textSpanFooter">Home</span>
              <span className="textSpanFooter">About us</span>
              <span className="textSpanFooter">How we work</span>
              <span className="textSpanFooter">Documents</span>
              <span className="textSpanFooter">Team</span>
              <span className="textSpanFooter">Roadmap</span>
            </div>
            <div className="col-md-4 colWise">
              <h3 className="txtHeading">ecosystem</h3>
              <span className="textSpanFooter">Tokenomic</span>
              <span className="textSpanFooter">About us</span>
              <span className="textSpanFooter">Launchpad</span>
              <span className="textSpanFooter">LP Pool</span>
            </div>
            <div className="col-md-4 colWise">
              <h3 className="txtHeading">community</h3>
              <div className="d-flex gap-3">
                <img src={social} />
                <img src={social1} />
                <img src={social2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
