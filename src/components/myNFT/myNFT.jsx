import React from "react";
import "./myNFT.css";
import circle from "../../Assets/Images/VectorCircle-01.png";
import PaginatedItems from "./nft";
function MyNFT() {
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
                  <div className="col-md-3 col-lg-0 col-xl-1 col-sm-12 "></div>
                  <div className="col-lg-12 col-xl-9 col-sm-12 text-center d-flex justify-content-center align-items-center flex-column">
                    <div className="btn_bg lucky_draw_heading pe-5 ps-5 rounded-pill ">
                      MY NFT
                      <span className="">
                        <img
                          src={circle}
                          className="img-fluid circle_luckydraw_myNFT"
                          width={"50px"}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-2 col-sm-12  button_responsive">
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
              <div className="col-12 col-lg-12 col-sm-12 d-none d-xl-block">
                <PaginatedItems itemsPerPage={3} />
              </div>
              <div className="col-12 col-lg-12 col-sm-12 d-none d-xl-none d-lg-block">
                <PaginatedItems itemsPerPage={2} />
              </div>
              <div className="col-12 col-lg-12 col-sm-12 d-block d-lg-none d-xl-none">
                <PaginatedItems itemsPerPage={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNFT;
