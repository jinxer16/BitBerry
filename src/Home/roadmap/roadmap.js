import React from "react";
import roadmap from "../../Assets/Images/roadmap.png";
import imgRight from "../../Assets/Images/roadmap1.png";
import imgCenter from "../../Assets/Images/roadmap2.png";
import imgLeft from "../../Assets/Images/roadmap3.png";

import "./roadmap.css";
function Roadmap() {
  return (
    <div className="contianer roadmap mt-5">
      <div className="row">
        <div className="col-md-12 ps-5 pe-5">
          <img src={roadmap} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4 subHeading mx-auto">OUR ROAD MAP</div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <p className="subPara">
            A long but tireless journey! Together, we build the new dream world!
          </p>
        </div>
      </div>
      <div className="row squareBgImg d-flex justify-content-center">
        <div className="col-md-2 ">
          <img src={imgLeft} className="img-fluid" height={"450px"} alt="" />
        </div>
        <div className="col-md-2 ">
          <img src={imgCenter} className="img-fluid" height={"450px"} alt="" />
        </div>
        <div className="col-md-2 ">
          <img src={imgRight} className="img-fluid" height={"450px"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
