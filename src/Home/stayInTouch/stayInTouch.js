import React from "react";
import stayRight from "../../Assets/Images/IMG_2064.png";
import stayLeft from "../../Assets/Images/IMG_2065.png";
function Stay() {
  return (
    <div className="contianer stayTouch d-flex align-items-center">
      <div className="row">
        <div className="col-4">
          <img src={stayRight} />
        </div>
        <div className="col-4">
          <img src={stayRight} />
        </div>
        <div className="col-4">
          <img src={stayLeft} />
        </div>
      </div>
    </div>
  );
}

export default Stay;
