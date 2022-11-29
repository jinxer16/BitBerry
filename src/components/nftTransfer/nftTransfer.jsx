import React from "react";
import "./nftTransfer.css";
import circle from "../../Assets/Images/VectorCircle-01.png";
import Picture1 from "../../Assets/Images/LuckyDraw/common.PNG";
import star from "../../Assets/Images/LuckyDraw/star.png";
function NftTransfer() {
  return (
    <div className="luckdraw">
      <div className="container luckyDrawMain mt-5">
        <div className="row d-flex justify-content-center mb-5 ">
          <div className="col-11 lucky_draw_border mb-5 ">
            <div className="row ">
              <div className="col-12 d-flex justify-content-end mt-1 ">X</div>
            </div>
            <div className="row ">
              <div className="col-12">
                <div className="row lucky_draw_top d-flex justify-content-evenly ">
                  <div className=" col-md-3 col-lg-3 col-xl-1 col-sm-12 "></div>
                  <div className="col-lg-6 col-xl-9 col-sm-12 text-center d-flex justify-content-center align-items-center">
                    <div className="btn_bg lucky_draw_heading pe-5 ps-5 rounded-pill ">
                      NFT Card Transfer
                      <span className="">
                        <img
                          src={circle}
                          className="img-fluid circle_luckydraw_nftTransfer"
                          width={"50px"}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xl-2 col-sm-12  button_responsive">
                    <div className="p-2 float-end">
                      <button className="button btn_bg">CONNECT WALLET</button>
                    </div>
                    <div className="p-2 float-end">
                      <button className="button">My NFT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-12 col-lg-12 col-sm-12 ">
                <div className="row d-flex justify-content-center ">
                  <div className="col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center">
                    <div className="row d-flex justify-content-center">
                      <div className="col-10 col-md-10 col-lg-10 pic-bg-nft justify-content-center">
                        <img
                          src={Picture1}
                          className="img-fluid mt-2 rounded mobileNftTransfer"
                          alt=""
                        />
                      </div>
                      <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-3">
                        <b className="text-uppercase">Common</b>
                      </div>
                      <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center ">
                        #1001
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6  col-lg-6 detail_bg detail_bg_2 justify-content-center align-items-center d-flex flex-column"
                    style={{ height: "auto" }}
                  >
                    {/* ************************************************************************************** */}
                    <div className="row mt-4">
                      <div className="col-12  d-flex justify-content-center ">
                        <div className="d-flex justify-content-around align-items-center flex-column mt-3">
                          <div className="align-self-start total_text lucky_draw_text">
                            To:
                          </div>
                          <div className="align-self-center total_text_1">
                            <input type="text" className="inputForTransfer" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ************************************************************************************** */}
                    <div className="row mt-4 d-flex justify-content-center mb-4">
                      {/* alternate for confirm and success message */}
                      <div className="col-sm-8 d-flex justify-content-around">
                        <div>
                          <button className="btn_mint_nft rounded-pill">
                            CONFIRM
                          </button>
                        </div>
                      </div>
                      {/* <div className="col-sm-8 d-flex justify-content-center mb-3">
                        <img src={star} alt=""></img>
                      </div>
                      <div className="col-sm-12 d-flex justify-content-center">
                        <span className="bgForSuccess">
                          Card Successfully Transferred !
                        </span>
                      </div> */}
                    </div>
                    {/* ************************************************************************************** */}
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

export default NftTransfer;
