import React from "react";
import roadmap from "../../Assets/Images/document.png";
import imgLeft from "../../Assets/Images/Group331.png";
import imgCenter from "../../Assets/Images/Group341.png";
import imgRight from "../../Assets/Images/Group351.png";
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
      <div className="row mt-3">
        <div className="col-md-8 col-10 subHeading mx-auto">
          <img src={Circle} width={"40px"} className="imgProject" />
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
      <div className="row squareBgImg d-flex justify-content-center mt-4">
        <div className="col-md-12">
          <img src={imgLeft} className="img-fluid  imgDoc" alt="" />
          <img src={imgCenter} className="img-fluid imgDoc" alt="" />
          <img src={imgRight} className="img-fluid imgDoc" alt="" />
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
