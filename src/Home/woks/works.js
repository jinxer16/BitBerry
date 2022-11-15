import React from "react";
import works from "../../Assets/Images/works.png";
import work1 from "../../Assets/Images/bitberryWatchSoon-01.png";
import work2 from "../../Assets/Images/LaunchpadSoon-01.png";
import work3 from "../../Assets/Images/bitberryStudios-01.png";
import work4 from "../../Assets/Images/WhatisBitbeery-01.png";
import centerPlug from "../../Assets/Images/rectline-01.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";

////arrow musebat
// position: absolute;
// top: -240px;
// left: 965px;
import "./works.css";
function Works() {
  return (
    <div className="contianer works w-80 mt-5">
      <div className="row">
        <div className="col-md-12 ps-5 pe-5">
          <img src={works} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-3 ">
        <div className="col-md-4 col-sm-12 subHeading mx-auto">
          <img src={Circle} width={"40px"} className="imgWorks" />
          our works
        </div>
      </div>
      <div className="row squareBgImg centerPlugContainer  d-flex justify-content-center mt-5">
        <img src={centerPlug} className="imgCenterPlug" />

        <div className="col-md-4 d-flex  justify-content-end">
          <img src={work1} alt="" className="img-fluid imgWork" />
        </div>
        <div className="col-md-4 d-flex justify-content-start">
          <img src={work2} alt="" className="img-fluid imgWork" />
        </div>
      </div>
      <div className="row squareBgImg d-flex justify-content-center mt-5">
        <div className="col-md-4 d-flex justify-content-end">
          <img src={work3} alt="" className="img-fluid imgWork" />
        </div>
        <div className="col-md-4 d-flex justify-content-start">
          <img src={work4} alt="" className="img-fluid imgWork" />
        </div>
      </div>
    </div>
  );
}

export default Works;
