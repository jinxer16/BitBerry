import React from "react";
import mech from "../../Assets/Images/mech.png";
import mechMain from "../../Assets/Images/mechMain.png";
import imgLeft from "../../Assets/Images/Group331.png";

import Circle from "../../Assets/Images/VectorCircle-01.png";
import "./mechanism.css";
function Mechanism() {
  return (
    <div className="contianer mechanism mt-5">
      <div className="row">
        <div className="col-md-12 ps-5 pe-5">
          <img src={mech} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 subHeading mx-auto">
          <img src={Circle} width={"40px"} className="imgMech" />
          Ecosystem Architecture
        </div>
      </div>

      <div className="row squareBgImg d-flex justify-content-center mt-4">
        <div className="col-md-12">
          <img src={mechMain} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Mechanism;
