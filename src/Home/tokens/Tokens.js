import React from "react";
import TOKENOMIC from "../../Assets/Images/TOKENOMIC.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import figure1 from "../../Assets/Images/_2774646056384.png";
import line from "../../Assets/Images/Vector20.png";
import "./tokens.css";
import line2 from "../../Assets/Images/Group14.png";
import figure2 from "../../Assets/Images/_2774768315120.png";
import figure3 from "../../Assets/Images/_x0020_1.png";
import figure4 from "../../Assets/Images/_x0020_12.png";
import figure5 from "../../Assets/Images/_x0020_13.png";
import line3 from "../../Assets/Images/Group27.png";
import lineHor from "../../Assets/Images/Group14hor.png";
import lineHor2 from "../../Assets/Images/Group27Hor.png";

function Tokens() {
  return (
    <div className="tokenContainer mt-5">
      <div className="col-md-12 ">
        <div className="container">
          <img src={TOKENOMIC} className="img-fluid" />
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-10 subHeading-token mx-auto">
            <img src={Circle} width={"40px"} className="img" />
            <div className="zoom-in-out-box"> TOKENOMIC</div>
          </div>
        </div>
        {/* Mobile Screen */}
        <div className="container-fluid mobile-screen tokens-bg">
          <div className="col-md-12">
            <div className="row mt-3">
              <div className="col-6 mt-3">
                <h3 className="text-center token-name-hor ">TOKEN NAME</h3>
                <h3 className="text-center bitberry-token-hor ">
                  Bitberry token
                </h3>
                <img
                  src={figure1}
                  className="img-fluid figure1"
                  width={"68px"}
                />
              </div>
              <div className="col-6 mt-3">
                <h3 className="text-center token-name-hor ">TOTAL SUPPLY</h3>
                <h3 className="text-center bitberry-token-hor ">
                  1,000,000,000
                </h3>
                <img
                  src={figure2}
                  className="img-fluid figure1"
                  width={"68px"}
                />
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <img src={lineHor} className="img-fluid img-hor" />
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <h3 className="text-center token-name-hor ">SYMBOL</h3>
                <h3 className="text-center bitberry-token-hor ">BBR</h3>
                <img
                  src={figure3}
                  className="img-fluid figure1"
                  width={"68px"}
                />
              </div>
              <div className="col-6">
                <h3 className="text-center token-name-hor ">DECIMAL</h3>
                <h3 className="text-center bitberry-token-hor ">18</h3>
                <img
                  src={figure4}
                  className="img-fluid figure1"
                  width={"68px"}
                />
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <img src={lineHor} className="img-fluid img-hor" />
            </div>
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-6">
                <h3 className="text-center token-name-hor ">CHAIN</h3>
                <h3 className="text-center bitberry-token-hor ">BSC</h3>
                <img
                  src={figure5}
                  className="img-fluid figure1"
                  width={"68px"}
                />
              </div>
            </div>
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-6">
                <h3 className="text-center token-name-hor">Contract address</h3>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-3 mt-2 ">
                <img src={lineHor2} className="img-fluid img-hor" />
              </div>
            </div>
            <div
              className="col-12 mt-3git
            "
            >
              0x8C7997E1D05833268ce36087517F333F9a158F21
            </div>
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-4">
                <button type="copy" className="btn-btn">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ************************************** EndMobile Screen *******************************************************/}
        <div className=" row d-flex justify-content-center tokens-bg screen-dis">
          <div className="col-md-10">
            <div className=" row d-flex justify-content-center ">
              <div className="col-md-2 lin-bg line">
                <div className="row">
                  <div className="col-md-2">
                    <img src={line} className="line1" />
                  </div>
                  <div className="col-md-10 mt-5">
                    <h3 className="text-center token-name ">TOKEN NAME</h3>
                    <h3 className="text-center bitberry-token ">
                      Bitberry token
                    </h3>
                    <img
                      src={figure1}
                      className="img-fluid figure1"
                      width={"80px"}
                    />
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
                    <h3 className="text-center bitberry-token ">
                      1,000,000,000
                    </h3>
                    <img
                      src={figure2}
                      className="img-fluid figure1"
                      width={"80px"}
                    />
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
                    <img
                      src={figure3}
                      className="img-fluid figure1"
                      width={"80px"}
                    />
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
                    <img
                      src={figure4}
                      className="img-fluid figure1"
                      width={"80px"}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2 lin-bg line">
                <div className="row">
                  <div className="col-md-1">
                    <img src={line2} className="line1" />
                  </div>
                  <div className="col-md-8 mt-5">
                    <h3 className="text-center token-name ">CHAIN</h3>
                    <h3 className="text-center bitberry-token ">BSC</h3>
                    <img
                      src={figure5}
                      className="img-fluid figure1"
                      width={"80px"}
                    />
                  </div>
                  <div className="col-md-1">
                    <img src={line} className="line1" />
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center ">
                <div className="col-md-10 mt-5">
                  <div className="row d-flex justify-content-center ">
                    <div className="col-md-3 text-cont">
                      &nbsp; &nbsp; Contract address &nbsp;
                      <img
                        src={line3}
                        className="img-fluid"
                        height={"10px"}
                        width={"16px"}
                      />
                    </div>
                    <div className="col-md-6 txt-add">
                      0x410dc9A12D848eB7166376e25914279EA02C87a0
                    </div>
                    <div className="col-md-2">
                      <button type="copy" className="btn">
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokens;
