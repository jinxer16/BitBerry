import React from "react";
import TOKENOMIC from "../../Assets/Images/TOKENOMIC.png";
import Circle from "../../Assets/Images/VectorCircle-01.png"
import './tokens.css'

function Tokens() {
  return (
    <>
      <div className="col-md-12">
        <div className="container-fluid">
          <img src={TOKENOMIC} className="img-fluid" />
        </div>
        <div className="row mt-3">

          <div className="col-md-4 subHeading mx-auto"> <span><img src={Circle} width={"40px"} className="img"/></span>TOKENOMIC</div>
        </div>
      </div>
    </>
  );
}

export default Tokens;
