import React from 'react'
import circle from "../../Assets/Images/VectorCircle-01.png";
import {IoClose} from "react-icons/io5";
import "./nftCard.css"

function nftCard() {
  return (
    <div>
    <div className='container luckyDrawMain mt-5'>
    <div className='row d-flex justify-content-center mb-5 '>
    <div className='col-11 lucky_draw_border mb-5'>
    <div className="row ">
    <div className="col-12 d-flex justify-content-end p-3"><IoClose/></div>
            </div>
            <div className="row ">
              <div className="col-12">
                <div className="row lucky_draw_top d-flex justify-conten-center">
                  <div className=" col-md-3 col-lg-3 col-xl-1 col-sm-12   "></div>
                  <div className="col-lg-6 col-xl-8 col-sm-12 text-center">
                    <div className="btn_bg lucky_draw_heading pe-5 ps-5 rounded-pill">
                    What is Treasure
X NFT card?
                      <span className="">
                        <img
                          src={circle}
                          className="img-fluid circle_luckydraw"
                          width={"50px"}
                        />
                      </span>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>


{/* **************************************************************************************************************** */}
<div className='row d-flex justify-content-center mt-5'>
<div className='col-10 text_paragraphs '>
<p className='text_paragraphs'> Bitberry carefully chooses the webtoon IPs and NFT cards that the company will release in the market. This guarantees the security and legitimacy of each entry. NFT ticket holders can receive leveled cards through airdrops for free.
However, the airdrops are limited and operate on a first-come-first-serve basis.</p>
<p>Users can expect to receive cards from 6 levels of rarities. These rarities are Common, Uncommon, Rare, Epic, Legendary, and Mythic. Cards from these levels have limited quantities and which users can learn from through future announcements.</p>

<p>Participants will need to spend 50,000 iBBR points in one Lucky Draw minting. Minting is available through staking
in the BBR and BBR LP pool. </p>


</div>
</div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default nftCard