import React from "react";
import works from "../../Assets/Images/works.png";
import work1 from "../../Assets/Images/bitberryWatchSoon-01.png";
import work2 from "../../Assets/Images/LaunchpadSoon-01.png";
import work3 from "../../Assets/Images/bitberryStudios-01.png";
import work4 from "../../Assets/Images/WhatisBitbeery-01.png";
import workMobile1 from "../../Assets/MobileImage/bitBerryStoryMobilbe-01.png";
import workMobile2 from "../../Assets/MobileImage/launchpadSoonMobile-01.png";
import workMobile3 from "../../Assets/MobileImage/bitBerryMobile-01.png";
import workMobile4 from "../../Assets/MobileImage/whatIsbitBerryMobile-01.png";
import centerPlug from "../../Assets/Images/lineCross-01.svg";
import Circle from "../../Assets/Images/VectorCircle-01.png";

////arrow musebat
// position: absolute;
// top: -240px;
// left: 965px;
import "./works.css";
function Works() {
  return (
    <>
      <div className="contianer works desktopWorks w-100 mt-5" id="ourWork">
      <div className="row">
          <div className="col-md-12 ps-5 pe-5">
            <img src={works} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-md-6 col-10 subHeading-work  mx-auto">
            <img src={Circle} width={"40px"} className="imgWorks " />
            <div className="zoom-in-out-box">our works</div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12 ps-5 pe-5">
            <img src={works} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-md-6 col-10 subHeading-work  mx-auto">
            <img src={Circle} width={"40px"} className="imgWorks " />
            <div className="zoom-in-out-box">our works</div>
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
        </div> */}
      </div>
<div className=" d-flex justify-content-evenly flex-row mt-5">
  <div className=""> <img src={work1} alt="" className="img-fluid imgWork" /></div>
  <div className=""> <img src={work2} alt="" className="img-fluid imgWork" /></div>
</div>
{/* <div className="d-flex justify-content-center">
<span className="line_bg">
</span>
</div> */}
<div className=" d-flex justify-content-evenly flex-row mt-5">
  <div className=""> <img src={work3} alt="" className="img-fluid imgWork" /></div>
  <div className=""> <img src={work4} alt="" className="img-fluid imgWork" /></div>
</div>




     {/* ************************************************88Mobile Screen */}
      <div className="container works mobileWorks w-100 mt-5">
        <div className="row">
          <div className="col-md-12 ps-5 pe-5">
            <img src={works} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-md-6 col-10 subHeading mx-auto">
            <img src={Circle} width={"40px"} className="imgWorks" />
            our works
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5">
            <img src={workMobile1} alt="" className="img-fluid " />
          </div>
          <div className="col-12 mt-5">
            <img src={workMobile2} alt="" className="img-fluid " />
          </div>
          <div className="col-12 mt-5">
            <img src={workMobile3} alt="" className="img-fluid " />
          </div>
          <div className="col-12 mt-5">
            <img src={workMobile4} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
