import React from "react";
import footerimg from "../../Assets/Images/Rectangle17.png";
import footerimgback from "../../Assets/Images/Rectangle18.png";
import bit from "../../Assets/Images/logo_Монтажная область 1 1.png";
import "./footer.css";
function Footer() {
  return (
    <div className="contianer footer">
      <div className="row ">
        <div className="col-4 col-sm-12 footerRight ">
          <img src={bit} />
          <span>&copy; 2022 bitberry. All rights reserved</span>
        </div>
        <div className="col-8 col-sm-12 footerLeft">
          <div className="row">
            <div className="col-4">
              <h3>sitemap</h3>
              <span>How we work</span>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
            </div>
            <div className="col-4"></div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
