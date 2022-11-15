import React from "react";
import work from "../../Assets/Images/work.png";
import work1 from "../../Assets/Images/WorkPic-01.png";
import work2 from "../../Assets/Images/workPic2-01.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import "./howWeWork.css";

function HowWeWork() {
  return (
    <div className="contianer howWeWork w-80 mt-5">
      <div className="row">
        <div className="col-md-12 ps-5 pe-5">
          <img src={work} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 col-sm-12 subHeading mx-auto">
          <img src={Circle} width={"40px"} className="imgHowWeWork" />
          how we work
        </div>
      </div>
      <div className="row  d-flex justify-content-center mt-4">
        <div className="col-md-4 bgImage">
          <img src={work1} className="img-fluid" alt="" />
        </div>
        <div className="col-md-4">
          <img src={work1} className="img-fluid" alt="" />
        </div>
        <div className="col-md-4">
          <img src={work2} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
