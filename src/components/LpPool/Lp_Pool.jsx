import React from 'react';
import "./LpPool.css";
import circle from "../../Assets/Images/VectorCircle-01.png";

function Lp_Pool() {
  return (
    <>
        <div className='container lpPoolMain  mt-5'>
        <div className='row d-flex justify-content-center mb-5 '>
        <div className='col-11 lp_pool_border'>
        <div className="row ">
              <div className="col-12 d-flex justify-content-end mt-1 ">X</div>
            </div>
            {/* ************************************************************************ */}
            <div className="row ">
              <div className="col-12">
                <div className="row lucky_draw_top d-flex justify-conten-center border">
                  <div className=" col-md-3 col-lg-3 col-xl-1 col-sm-12  border border-primary "></div>
                  <div className="col-lg-6 col-xl-8 col-sm-12 border border-danger text-center">
                    <div className="btn_bg lucky_draw_heading pe-5 ps-5 rounded-pill">
                    BITBERRY LP POOL
                      <span className="">
                        <img
                          src={circle}
                          className="img-fluid circle_luckydraw"
                          width={"50px"}
                        />
                      </span>
                    </div>
                    <div className="mt-2 lucky_draw_text text-center">
                    Stake $BBR to Earn iBBR Points iBBR point gives its users access to the Launchpad with the chance to receive a Treasure X NFT from a lucky draw!
                    </div>
                  </div>
                  <div className="col-lg-3 col-xl-3 col-sm-12 border border-warning button_responsive">
                    <div className="p-2 float-end">
                      <button className="button btn_bg">CONNECT WALLET</button>
                    </div>
                    <div className="p-2 float-end">
                      <button className="button">My NFT</button>
                    </div>
                    <div className="p-2 float-end lpPool_box">
                    <div className='balance_text'>
                    Balance:
                    </div>
                    <div className="d-flex flex-row justify-content-between ">
  <div className="p-1">BBR</div>
  <div className=" ">1000</div>
</div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>

        </div>

        </div>
    </>
  )
}

export default Lp_Pool