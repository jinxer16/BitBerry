import React from "react";
import roadmap from "../../Assets/Images/roadmap.png";
import imgRight from "../../Assets/Images/roadmap1.png";
import imgCenter from "../../Assets/Images/roadmap2.png";
import imgLeft from "../../Assets/Images/roadmap3.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
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
        <div className="col-md-6 col-10 subHeading-roadmap mx-auto">
          OUR ROAD MAP
          <img src={Circle} width={"40px"} className="imgRoadmap" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <p className="subPara">
            A long but tireless journey! Together, we build the new dream world!
          </p>
        </div>
      </div>
      <div className="row squareBgImg d-flex justify-content-center">
        <div className="col-md-12 imgGroup ">
          <img src={imgLeft} className="img-fluid imgStyle" alt="" />
          <img src={imgCenter} className="img-fluid imgStyle" alt="" />
          <img src={imgRight} className="img-fluid imgStyle" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
