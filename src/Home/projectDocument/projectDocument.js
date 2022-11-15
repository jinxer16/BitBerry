import React from "react";
import roadmap from "../../Assets/Images/document.png";
import imgRight from "../../Assets/Images/roadmap1.png";
import imgCenter from "../../Assets/Images/roadmap2.png";
import imgLeft from "../../Assets/Images/roadmap3.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import "./projectDocument.css";
function ProjectDocument() {
  return (
    <div className="contianer projectDocument mt-5">
      <div className="row">
        <div className="col-md-12 ps-5 pe-5">
          <img src={roadmap} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4 subHeading mx-auto">
          <img src={Circle} width={"40px"} className="imgRoadmap" />
          project document
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <p className="subPara">
            Learn more about our ecosystem through these attachements.
          </p>
        </div>
      </div>
      <div className="row squareBgImg d-flex justify-content-center">
        <div className="col-md-2 imgGroup">
          <img src={imgLeft} className="img-fluid imgStyle" alt="" />
          <img src={imgCenter} className="img-fluid imgStyle" alt="" />
          <img src={imgRight} className="img-fluid imgStyle" alt="" />
        </div>
        {/* <div className="col-md-2 ">
          <img src={imgCenter} className="img-fluid imgStyle" alt="" />
        </div>
        <div className="col-md-2 ">
          <img src={imgRight} className="img-fluid imgStyle" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default ProjectDocument;
