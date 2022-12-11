import React, { useState, useEffect } from "react";
import "./nftTicket.css";
import circle from "../../Assets/Images/VectorCircle-01.png";
import common from "../../Assets/Images/LuckyDraw/common.PNG";
import rare from "../../Assets/Images/LuckyDraw/rare.PNG";
import epic from "../../Assets/Images/LuckyDraw/epic.PNG";
import { IoClose } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import {useDispatch, useSelector} from "react-redux";
import {connectionAction} from "../../Redux/connection/actions"

function NftTicket() {
  const dispatch = useDispatch();
	let acc = useSelector((state) => state.connect?.connection);
  let [animationState, setAnimationState] = useState(true);

  const connectWallet = () =>{
		dispatch(connectionAction())
	}
  useEffect(() => {
    let interval = setInterval(() => {
      setAnimationState((prevState) => !prevState);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="luckdraw">
      <div className="container luckyDrawMain">
        <div className="row d-flex justify-content-center mb-4 ">
          <div className="col-11  mb-5 ">
            <div className="row ">
              {/* <div className="col-12 d-flex justify-content-end p-3">
                <IoClose />
              </div> */}
            </div>
            <div className="row ">
              <div className="col-12">
                <div className="row lucky_draw_top d-flex justify-content-evenly ">
                  <div className="col-md-3 col-lg-0 col-xl-1 col-sm-12 "></div>
                  <div className="col-lg-12 col-xl-9 col-sm-12 text-center d-flex justify-content-center align-items-center flex-column">
                    <div className="btn_bg lucky_draw_heading pe-5 ps-5 rounded-pill nft_responsive mt-2">
                      <div className="d-flex pos-rel">
                        <span
                          className={
                            animationState
                              ? "header header--pushDownOne"
                              : "header"
                          }
                        >
                          Congratulation !
                        </span>
                        <span className="">
                          <img
                            src={circle}
                            className="img-fluid circle_luckydraw_nftTicket"
                            width={"45px"}
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 lucky_draw_text text-center">
                      You Got A NFT Ticket Now
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-2 col-sm-12  button_responsive">
                    <div className="p-2 float-end">
                      <button className="button btn_bg" onClick={connectWallet}>
                      {acc === "No Wallet"
                ? "Connect"
                : acc === "Connect Wallet"
                ? "Connect"
                : acc === "Wrong Network"
                ? acc
                : acc.substring(0, 3) + "..." + acc.substring(acc.length - 3)}
                      </button>
                    </div>
                    <div className="p-2 float-end">
                      <HashLink to="/myNft">
                        <button className="button">My NFT</button>
                      </HashLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-12 col-lg-12 col-sm-12 ">
                <div className="row d-flex justify-content-around ">
                  <div className="col-xl-3 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center">
                    <div className="row d-flex justify-content-center">
                      <div className="col-10 col-md-10 col-lg-10 pic-bg-nftTicket justify-content-center">
                        <img
                          src={epic}
                          className="img-fluid mt-2 rounded mobileNftTransfer"
                          alt=""
                        />
                      </div>
                      <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-3">
                        <b className="text-uppercase">Epic</b>
                      </div>
                      <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center ">
                        #1002
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center">
                    <div className="row d-flex justify-content-center">
                      <div className="col-10 col-md-10 col-lg-10 pic-bg-nftTicket justify-content-center">
                        <img
                          src={rare}
                          className="img-fluid mt-2 rounded mobileNftTransfer"
                          alt=""
                        />
                      </div>
                      <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-3">
                        <b className="text-uppercase">Rare</b>
                      </div>
                      <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center ">
                        #1002
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center">
                    <div className="row d-flex justify-content-center">
                      <div className="col-10 col-md-10 col-lg-10 pic-bg-nftTicket justify-content-center">
                        <img
                          src={common}
                          className="img-fluid mt-2 rounded mobileNftTransfer"
                          alt=""
                        />
                      </div>
                      <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-3">
                        <b className="text-uppercase">Common</b>
                      </div>
                      <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center ">
                        #1004
                      </div>
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

export default NftTicket;
