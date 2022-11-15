import React from "react";
import stayRight from "../../Assets/Images/IMG_2064.png";
import stayLeft from "../../Assets/Images/IMG_2065.png";
import contactUs from "../../Assets/Images/contactus.png";
import inputLine from "../../Assets/Images/inputBottomLine.png";
import "./stayInTouch.css";
function Stay() {
  return (
    <div className="contianer stayTouch mt-5 mb-2">
      <div className="row">
        <div className="col-md-12 ps-5 pe-5">
          <img src={contactUs} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4 subHeading  mx-auto">Stay In Touch</div>
      </div>
      <div className="row squareBgImg">
        <div className="col-4">
          <img src={stayRight} className="img-fluid" alt="" />
        </div>
        <div className="col-4 d-flex justify-content-center">
          <div className="row d-flex align-items-center ">
            <div className="col-12 colWise">
              <input
                type="text"
                placeholder="Your name"
                className="mb-2 inputField"
                alt=""
              />
              <img src={inputLine} className="mb-5" alt="" />
              <input
                type="text"
                placeholder="Your Email"
                className="mb-2 inputField"
                alt=""
              />
              <img src={inputLine} className="mb-5" alt="" />
              <button type="submit" className="btnSubmit">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <img src={stayLeft} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Stay;
