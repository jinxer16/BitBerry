import React, { useState, useEffect } from "react";
import "./LuckyDraw.css";
import circle from "../../Assets/Images/VectorCircle-01.png";
import Picture1 from "../../Assets/Images/LuckyDraw/Rectangle42.png";
import greencolor from "../../Assets/Images/LuckyDraw/Ellipse5.png";
import colorcircle from "../../Assets/Images/LuckyDraw/Ellipse6.png";
import colorcircle1 from "../../Assets/Images/LuckyDraw/Ellipse7.png";
import colorcircle2 from "../../Assets/Images/LuckyDraw/Ellipse8.png";
import colorcircle3 from "../../Assets/Images/LuckyDraw/Ellipse9.png";
import colorcircle4 from "../../Assets/Images/LuckyDraw/Ellipse10.png";
import { IoClose } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import NftTicket from "../nftTicket/nftTicket";
import { Modal, ModalFooter } from "react-bootstrap";
function LuckyDraw() {
  const [show, setShow] = useState(false);
  const handleMint = () => {
    console.log("handle Mint");
    setShow(true);
  };
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  useEffect(() => {
    let interval = setInterval(() => {
      setAnimationState((prevState) => !prevState);
      setAnimationState1((prevState) => !prevState);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="luckdraw">
      <div className="container luckyDrawMain mt-5">
        <div className="row d-flex justify-content-center mb-5 ">
          <div className="col-11 lucky_draw_border mb-5 ">
            <div className="row ">
              <div className="col-12 d-flex justify-content-end p-3">
                <IoClose />
              </div>
            </div>
            <div className="row ">
              <div className="col-12">
                <div className="row lucky_draw_top d-flex justify-content-evenly ">
                  <div className=" col-md-12 col-lg-3 col-xl-1 col-sm-12  "></div>
                  <div className="col-md-12 col-xl-8 col-sm-12  text-center d-flex justify-content-center align-items-center flex-column">
                    <div className="btn_bg lucky_draw_heading lucky_draw_heading2 pe-5 ps-5 rounded-pill mt-4">
                      <span
                        className={
                          animationState
                            ? "header header--pushDownOne"
                            : "header"
                        }
                      >
                        NFT
                      </span>
                      &nbsp;
                      <span
                        className={
                          animationState1
                            ? "header header--pushDownTwo"
                            : "header"
                        }
                      >
                        LUCKY DRAW
                      </span>
                      <span className="">
                        <img
                          src={circle}
                          className="img-fluid circle_luckydraw"
                          width={"50px"}
                        />
                      </span>
                    </div>
                    <div className="mt-3 lucky_draw_text text-center">
                      Mint NFT Ticket and get awesome Treasure X NFT card !
                    </div>
                  </div>
                  <div className="col-md-12 col-xl-3 col-sm-12 button_responsive">
                    <div className="p-2 float-end">
                      <button className="button btn_bg">CONNECT WALLET</button>
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
                <div className="row d-flex justify-content-center ">
                  <div className="col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center">
                    <div className="row d-flex justify-content-center">
                      <div className="col-10 col-md-10 col-lg-10 pic-bg justify-content-center">
                        <img src={Picture1} className="img-fluid mt-3" />
                      </div>
                      <div className="col-12 col-md-12 col-sm-12 col-lg-12 detail_bg">
                        <div className="row d-flex justify-content-center mbl_padding">
                          <div className="col-2 col-md-2 color1">
                            <div class="d-flex flex-column pt-2 pb-2">
                              <div class="text-center">
                                <img
                                  src={greencolor}
                                  className="img-fluid"
                                  width={"15px"}
                                />
                              </div>
                              <div class="green_text text-center">35.0%</div>
                              <div class="green_text text-center">
                                <b>Common</b>
                              </div>
                            </div>
                          </div>
                          <div className="col-2 col-md-2 color2">
                            <div class="d-flex flex-column pt-2 pb-3">
                              <div class="text-center">
                                <img
                                  src={colorcircle}
                                  className="img-fluid"
                                  width={"15px"}
                                />
                              </div>
                              <div class="green_text text-center">22.0%</div>
                              <div class="green_text text-center">
                                <b>Uncommon</b>
                              </div>
                            </div>
                          </div>
                          <div className="col-2 col-md-2 color3 ">
                            <div class="d-flex flex-column pt-2 pb-3">
                              <div class="text-center">
                                <img
                                  src={colorcircle1}
                                  className="img-fluid"
                                  width={"15px"}
                                />
                              </div>
                              <div class="green_text text-center">19.0%</div>
                              <div class="green_text text-center">
                                <b>Rare</b>
                              </div>
                            </div>
                          </div>
                          <div className="col-2 col-md-2 color4">
                            <div class="d-flex flex-column pt-2 pb-3">
                              <div class="text-center">
                                <img
                                  src={colorcircle2}
                                  className="img-fluid"
                                  width={"15px"}
                                />
                              </div>
                              <div class="green_text text-center">14.0%</div>
                              <div class="green_text text-center">
                                <b>Epic</b>
                              </div>
                            </div>
                          </div>
                          <div className="col-2 col-md-2  color5">
                            <div class="d-flex flex-column pt-2 pb-3">
                              <div class="text-center">
                                <img
                                  src={colorcircle3}
                                  className="img-fluid"
                                  width={"15px"}
                                />
                              </div>
                              <div class="green_text text-center">8.5%</div>
                              <div class="green_text text-center">
                                <b>Legendry</b>
                              </div>
                            </div>
                          </div>
                          <div className="col-2 col-md-2 color6">
                            <div class="d-flex flex-column pt-2 pb-3">
                              <div class="text-center">
                                <img
                                  src={colorcircle4}
                                  className="img-fluid"
                                  width={"15px"}
                                />
                              </div>
                              <div class="green_text text-center">1.5%</div>
                              <div class="green_text text-center">
                                <b>Mythic</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6  col-md- col-lg-6 detail_bg detail_bg_2"
                    style={{ height: "auto" }}
                  >
                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="d-flex justify-content-between mt-3">
                          <div className="align-self-center balance_text">
                            Balance:
                          </div>
                          <div className="align-self-center Point_bg">
                            <span>
                              <b>100,000</b>
                            </span>
                            iBBR Point
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12 borderLine "></div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="text-center luckyDrawAmount_text">
                          Lucky Draw Amount
                        </div>
                      </div>
                    </div>
                    {/* ************************************************************************************** */}
                    <div className="row mt-3 d-flex justify-content-center">
                      <div className=" col-sm-6 ">
                        <div className="row d-flex justify-content-around align-items-center">
                          <div className=" col-sm-6 d-flex align-items-center  Minusbox-1 gap-2">
                            <div className="text-center">
                              <i class="fa-solid fa-minus"></i>
                            </div>
                          </div>
                          <div className="col-4  d-flex align-items-center justify-content-center Textbox">
                            <div className="text-center inputText">1</div>
                          </div>
                          <div className="col-3  d-flex align-items-center Plusbox-1">
                            <div className="text-center">
                              <i class="fa-solid fa-plus"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ************************************************************************************** */}
                    <div className="row mt-4">
                      <div className="col-12 d-flex justify-content-center ">
                        <div className="textBox-2">
                          <div className="d-flex justify-content-around align-items-center mt-3">
                            <div className="align-self-center total_text">
                              Total Cost
                            </div>
                            <div className="align-self-center total_text_1">
                              <span>
                                <b>50 000</b>
                              </span>{" "}
                              iBBR
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ************************************************************************************** */}
                    <div className="row mt-4">
                      <div className=" text-center text_2">
                        Maximum 3 NFTs PER tx
                      </div>
                    </div>
                    {/* ************************************************************************************** */}
                    <div className="row mt-4 d-flex justify-content-center mb-4">
                      <div className="col-sm-8 d-flex justify-content-around">
                        <div>
                          <button
                            className="btn_mint rounded-pill"
                            onClick={() => {
                              handleMint();
                            }}
                          >
                            Mint
                          </button>
                        </div>
                        <div>
                          <HashLink to="/myNft">
                            <button className="btn_myNft rounded-pill">
                              My NFT
                            </button>
                          </HashLink>
                        </div>
                      </div>
                    </div>
                    {/* ************************************************************************************** */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* **************************Modal******************************* */}
      {show && (
        <Modal
          className="model"
          show={show}
          size="xl"
          backdrop="static"
          keyboard={false}
          dialogClassName="modal-100w"
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <NftTicket />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default LuckyDraw;
