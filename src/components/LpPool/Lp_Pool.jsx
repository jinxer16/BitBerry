import React from "react";
import "./LpPool.css";
import circle from "../../Assets/Images/VectorCircle-01.png";
import sign from "../../Assets/Images/LpPool/VectorSign.png";
import Picture1 from "../../Assets/Images/LpPool/Rectangle110.png";
import Picture2 from "../../Assets/Images/LpPool/Rectangle1101.png";
import Picture3 from "../../Assets/Images/LpPool/Rectangle1102.png";
import Picture4 from "../../Assets/Images/LpPool/Rectangle1103.png";
import Picture5 from "../../Assets/Images/LpPool/Rectangle1104.png";
import Picture6 from "../../Assets/Images/LpPool/Rectangle1105.png";

import { IoAlertCircle, IoClose } from "react-icons/io5";
import { OverlayTrigger, Tooltip, Popover } from "react-bootstrap";
function Lp_Pool() {
  const data = [
    {
      picture: Picture1,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip: `Stake BBR token to earn iBBR point.
      Token Lock 7days condition.
      *If unstake in locked period , 2.5% fee deduct.`,
    },
    {
      picture: Picture1,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip: `Stake BBR LP token to earn iBBR point.
      LP Token Lock 14days , X 2 Reward point
      * Token can not unstake in locked period.`,
    },
    {
      picture: Picture2,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip: "Stake NFT Tier Card to earn iBBR point. NFT Tier Card can unstake anytime",
    },
    {
      picture: Picture3,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip: "Stake NFT Tier Card to earn iBBR point. NFT Tier Card can unstake anytime",
    },
    {
      picture: Picture4,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip: "Stake NFT Tier Card to earn iBBR point. NFT Tier Card can unstake anytime",
    },
    {
      picture: Picture5,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip: "Stake NFT Tier Card to earn iBBR point. NFT Tier Card can unstake anytime",
    },
    {
      picture: Picture6,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip: "Stake NFT Tier Card to earn iBBR point. NFT Tier Card can unstake anytime",
    },
  ];
  console.log(data);
  return (
    <div className="lpPoolMain">
      <div className="container  mt-5">
        <div className="row d-flex justify-content-center mb-5 ">
          <div className="col-11 lp_pool_border">
            <div className="row ">
            <div className="col-12 d-flex justify-content-end p-3"><IoClose/></div>
            </div>
            {/* ************************************************************************ */}
            <div className="row ">
              <div className="col-12">
                <div className="row lucky_draw_top d-flex justify-content-center">
                  <div className=" col-md-3 col-lg-3 col-xl-1 col-sm-12 "></div>
                  <div className="col-lg-12 col-xl-8 col-sm-12 text-center">
                    <div className="btn_bg lucky_draw_heading pe-5 tablet_responsive ps-5 rounded-pill">
                      BITBERRY LP POOL
                      <span className="">
                        {/* <IoAlertCircle/> */}
                        <img
                          src={circle}
                          className="img-fluid circle_lpPool"
                          width={"50px"}
                        />
                      </span>
                    </div>
                    <div className="mt-2 lucky_draw_text text-center">
                      Stake $BBR to Earn iBBR Points iBBR point gives its users
                      access to the Launchpad with the chance to receive a
                      Treasure X NFT from a lucky draw!
                    </div>
                  </div>
                  <div className=" col-md-12 col-xl-3 col-sm-12  button_responsive">
                    <div className="p-2 float-end">
                      <button className="button btn_bg">CONNECT WALLET</button>
                    </div>
                    <div className="p-2 float-end">
                      <button className="button">My NFT</button>
                    </div>
                    <div className="p-2 float-end lpPool_box">
                      <div className="balance_text">Balance:</div>
                      <div className="d-flex flex-row justify-content-between ">
                        <div className="">BBR</div>
                        <div className=" ">1000</div>
                      </div>
                      <div className="d-flex flex-row justify-content-between ">
                        <div className="">iBBR</div>
                        <div className="pb-2">40</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ************************************************************************ */}
            <div className="row mt-5 d-flex justify-content-center mb-3">
              <div className="col-11">
                <div className="row d-flex justify-content-between mbl_responsive">
                  {data.map((data) => {
                    return (
                      <div className="col-3 Cardborder background_card mb-4 ">
                        <div className="row mt-2 mb-2">
                          <div className="col-3"></div>
                          <div className="text-center card_title col-6">
                            BBR
                          </div>
                          <div className="text-end col-3">
                            <OverlayTrigger
                            className="toolTip_inner"
                              placement="bottom-end"
                              overlay={
                                <Tooltip
                                //   id="tooltip-disabled"
                                  className="toolTip_inner"
                                >
                                  {data.tooltip}
                                </Tooltip>
                              }
                            >
                              <span className="fs-5">
                                <IoAlertCircle />
                              </span>
                            </OverlayTrigger>

                          </div>
                        </div>
                        <div className=" d-flex flex-row justify-content-around">
                          <div className="card_deposit">Deposit:</div>
                          <div className="card_value">
                            <b>{data.token1}</b>
                          </div>
                          <div className="card_deposit">Earn:</div>
                          <div className="card_value">
                            <b>{data.token2}</b>
                          </div>
                        </div>
                        <div className="row mt-3 d-flex justify-content-center">
                          <div className="col-10 card_body ">
                            <div className="row d-flex justify-content-center">
                              <div className="col-8 mt-3">
                                <img
                                  src={data.picture}
                                  className="img-fluid"
                                  width={"147px"}
                                />
                              </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                              <div className="col-11 d-flex justify-content-between">
                                <div className="wallet_text">Wallet</div>
                                <div className="token_text">{data.wallet}</div>
                              </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                              <div className="col-11 d-flex justify-content-between">
                                <div className="wallet_text">iBBR Point</div>
                                <div className="token_text">
                                  {data.iBBR_Point}
                                </div>
                              </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                              <div className="col-11 d-flex justify-content-between">
                                <div className="wallet_text">Staked</div>
                                <div className="token_text">{data.staked}</div>
                              </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                              <div className="col-11 d-flex justify-content-between">
                                <div className="wallet_text">Enter BBR</div>
                                <div className="token_text_bg">
                                  <div className="d-flex flex-row justify-content-around align-items-center ">
                                    <div className="wallet_text">0</div>
                                    <div className="token_text">Max</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-center buttoun_background">
                          <div className=" mt-3">
                            <button className="button_bg">
                              {" "}
                              Approve & Stake
                            </button>
                          </div>
                          <div className=" d-flex  flex-row justify-content-around ">
                            <button className="button_Unstake"> Unstake</button>
                            <button className=" button_redeem">Redeem</button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* ************************************************************************ */}
                  {/* <div className="col-3 border"></div>
                  <div className="col-3 border"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lp_Pool;
