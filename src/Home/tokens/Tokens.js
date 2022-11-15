import React from "react";
import TOKENOMIC from "../../Assets/Images/TOKENOMIC.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import figure1 from "../../Assets/Images/_2774646056384.png";
import line from "../../Assets/Images/Vector20.png";
import './tokens.css'
import line2 from "../../Assets/Images/Group14.png";
import figure2 from "../../Assets/Images/_2774768315120.png";
import figure3 from "../../Assets/Images/_x0020_1.png";
import figure4 from "../../Assets/Images/_x0020_12.png";
import figure5 from "../../Assets/Images/_x0020_13.png"

function Tokens() {
  return (
    <>
      <div className="col-md-12">
        <div className="container">
          <img src={TOKENOMIC} className="img-fluid" />
        </div>
        <div className="row mt-3">
          <div className="col-md-4 subHeading mx-auto"> <img src={Circle} width={"40px"} className="img"/>TOKENOMIC</div>
        </div>
        <div className=" row  d-flex justify-content-center tokens-bg">
        <div className="col-md-2 lin-bg line">
        <div className="row">
        <div className="col-md-2">
        <img src={line} className="line1" />
        </div>
        <div className="col-md-10 mt-5">
        <h3 className="text-center token-name ">TOKEN NAME</h3>
          <h3 className="text-center bitberry-token ">Bitberry token</h3>
          <img src={figure1} className="img-fluid figure1" width={"80px"}/>
        </div>
        </div>
        </div>
        <div className="col-md-2 lin-bg line">
        <div className="row">
        <div className="col-md-2">
        <img src={line2} className="line1" />
        </div>
        <div className="col-md-10 mt-5">
        <h3 className="text-center token-name ">TOTAL SUPPLY</h3>
          <h3 className="text-center bitberry-token ">1,000,000,000</h3>
          <img src={figure2} className="img-fluid figure1" width={"80px"}/>
        </div>
        </div>
        </div>
        <div className="col-md-2 lin-bg line">
        <div className="row">
        <div className="col-md-2">
        <img src={line2} className="line1" />
        </div>
        <div className="col-md-10 mt-5">
        <h3 className="text-center token-name ">SYMBOL</h3>
          <h3 className="text-center bitberry-token ">BBR</h3>
          <img src={figure3} className="img-fluid figure1" width={"80px"}/>
        </div>
        </div>
        </div>
        <div className="col-md-2 lin-bg line">
        <div className="row">
        <div className="col-md-2">
        <img src={line2} className="line1" />
        </div>
        <div className="col-md-10 mt-5">
        <h3 className="text-center token-name ">DECIMAL</h3>
          <h3 className="text-center bitberry-token ">18</h3>
          <img src={figure4} className="img-fluid figure1" width={"80px"}/>
        </div>
        </div>
        </div>
        <div className="col-md-2 lin-bg line">
        <div className="row">
        <div className="col-md-1">
        <img src={line2} className="line1" />
        </div>
        <div className="col-md-9 mt-5">
        <h3 className="text-center token-name ">CHAIN</h3>
          <h3 className="text-center bitberry-token ">BSC</h3>
          <img src={figure4} className="img-fluid figure1" width={"80px"}/>
        </div>
        <div className="col-md-1">
        <img src={line} className="line1" />
        </div>
        </div>
        </div>
        
        </div>

      </div>
    </>
  );
}

export default Tokens;
