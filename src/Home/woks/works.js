import React from "react";
import works from "../../Assets/Images/works.png";
import work1 from "../../Assets/Images/work1.png";
import work2 from "../../Assets/Images/work2.png";
import work3 from "../../Assets/Images/work3.png";
import work4 from "../../Assets/Images/work4.png";
import verticalArrow from "../../Assets/Images/verticalArrow.png";
import horizontalArrow from "../../Assets/Images/horizontalArrow.png";
import centerPlug from "../../Assets/Images/centerPlug.png";
////arrow musebat
// position: absolute;
// top: -240px;
// left: 965px;
import "./works.css";
function Works() {
  return (
    <div className="contianer works w-80 mt-5">
      <div className="row">
        <div className="col-md-12">
          <img src={works} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4 subHeading mx-auto">our works</div>
      </div>
      <div className="row squareBgImg d-flex mt-5">
        <div className="col-md-5 d-flex justify-content-end">
          <img src={work1} alt="" />
        </div>
        <div className="col-2"></div>
        <div className="col-md-5 d-flex justify-content-start">
          <img src={work2} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <img src={horizontalArrow} alt="" />
          <img src={centerPlug} alt="" />
          <img src={verticalArrow} alt="" />
        </div>
      </div>
      <div className="row squareBgImg d-flex mt-5">
        <div className="col-md-5 d-flex justify-content-end">
          <img src={work3} alt="" />
        </div>
        <div className="col-2"></div>
        <div className="col-md-5 d-flex justify-content-start">
          <img src={work4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Works;
