import React from "react";
import roadmap from "../../Assets/Images/document.png";
import imgLeft from "../../Assets/Images/Group331.png";
import imgCenter from "../../Assets/Images/Group341.png";
import imgRight from "../../Assets/Images/Group351.png";
import group1 from "../../Assets/Images/Group37.png";
import group2 from "../../Assets/Images/Group38.png";
import group3 from "../../Assets/Images/Group39.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import "./projectDocument.css";
function ProjectDocument() {
  return (
    <div className="contianer projectDocument mt-5" id="documents">
      <div className="row">
        <div className="col-md-12 ps-5 pe-5">
          <img src={roadmap} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-8 col-10 subHeading-project mx-auto">
          <img src={Circle} width={"40px"} className="imgProject" />
          <div className="zoom-in-out-box"> project document</div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <p className="subPara">
            Learn more about our ecosystem through these attachements.
          </p>
        </div>
      </div>
      <div className="row squareBgImg d-flex justify-content-center mt-4">
        <div className="col-md-12 d-flex flipcart ">
          <div className="hover-button">
            <img
              src={imgLeft}
              className="img-fluid  imgDoc hover-button--off"
              alt=""
            />
            <img
              src={group1}
              className="img-fluid  imgDoc hover-button--on"
              alt=""
            />
          </div>
          <div className="hover-button">
            <img
              src={imgCenter}
              className="img-fluid imgDoc hover-button--off"
              alt=""
            />
            <img
              src={group2}
              className="img-fluid  imgDoc hover-button--on"
              alt=""
            />
          </div>
          <div className="hover-button">
            <img
              src={imgRight}
              className="img-fluid imgDoc hover-button--off"
              alt=""
            />
            <img
              src={group3}
              className="img-fluid  imgDoc hover-button--on"
              alt=""
            />
          </div>
        </div>
        {/* <div className="col-md-4">
          <img src={imgCenter} className="img-fluid " alt="" />
        </div>
        <div className="col-md-4">
          <img src={imgRight} className="img-fluid " alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default ProjectDocument;
