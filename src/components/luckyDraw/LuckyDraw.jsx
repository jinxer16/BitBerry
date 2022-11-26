import React from 'react'
import "./LuckyDraw.css"
import circle from "../../Assets/Images/VectorCircle-01.png"
import Picture1 from "../../Assets/Images/LuckyDraw/Rectangle42.png"
import greencolor from "../../Assets/Images/LuckyDraw/Ellipse5.png"
import colorcircle from "../../Assets/Images/LuckyDraw/Ellipse6.png"
import colorcircle1 from "../../Assets/Images/LuckyDraw/Ellipse7.png"
import colorcircle2 from "../../Assets/Images/LuckyDraw/Ellipse8.png"
import colorcircle3 from "../../Assets/Images/LuckyDraw/Ellipse9.png"
import colorcircle4 from "../../Assets/Images/LuckyDraw/Ellipse10.png"
function LuckyDraw() {
    return (
        <div>
            <div className='container luckyDrawMain mt-5'>
                <div className='row d-flex justify-content-center '>
                    <div className='col-11 lucky_draw_border'>
                        <div className='row '>
                            <div className='col-12 d-flex justify-content-end mt-1 '>
                                X
                            </div>
                        </div>
                        <div className='row '>
                            <div className='col-12'>
                                <div className='row lucky_draw_top d-flex justify-conten-center border'>
                                    <div className=' col-md-3 col-lg-3 col-xl-1 col-sm-12  border border-primary '></div>
                                    <div className='col-lg-6 col-xl-8 col-sm-12 border border-danger text-center'>
                                        <div className='btn_bg lucky_draw_heading pe-5 ps-5 rounded-pill'>
                                            NFT LUCKY DRAW
                                            <span className=''><img src={circle} className='img-fluid circle_luckydraw' width={"50px"} /></span>
                                        </div>
                                        <div className='mt-2 lucky_draw_text text-center'>
                                            Mint NFT Ticket and get awesome Treasure X NFT card !
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-xl-3 col-sm-12 border border-warning button_responsive'>
                                        <div className='p-2 float-end'>
                                            <button className='button btn_bg'>CONNECT WALLET</button>
                                        </div>
                                        <div className='p-2 float-end'>
                                            <button className='button'>My NFT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 border border-primary'>
                                <div className='row '>
                                    <div className='col-6 border border-danger d-flex justify-content-center'>
                                        <div className='row'>
                                            <div className='col-10 pic-bg justify-content-center'>
                                                <img src={Picture1} className='img-fluid mt-3' />
                                            </div>
                                            <div className='col-12 detail_bg'>
                                                <div className='row'>
                                                    <div className="col-2 color1">
                                                        <div class="d-flex flex-column pt-2 pb-2">
                                                            <div class="text-center"><img src={greencolor} className="img-fluid" width={"15px"} /></div>
                                                            <div class="green_text text-center">35.0%</div>
                                                            <div class="green_text text-center"><b>Common</b></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 color2"><div class="d-flex flex-column pt-2 pb-3">
                                                        <div class="text-center"><img src={colorcircle} className="img-fluid" width={"15px"} /></div>
                                                        <div class="green_text text-center">22.0%</div>
                                                        <div class="green_text text-center"><b>Uncommon</b></div>
                                                    </div></div>
                                                    <div className="col-2 color3 "><div class="d-flex flex-column pt-2 pb-3">
                                                        <div class="text-center"><img src={colorcircle1} className="img-fluid" width={"15px"} /></div>
                                                        <div class="green_text text-center">19.0%</div>
                                                        <div class="green_text text-center"><b>Rare</b></div>
                                                    </div></div>
                                                    <div className="col-2  color4"><div class="d-flex flex-column pt-2 pb-3">
                                                        <div class="text-center"><img src={colorcircle2} className="img-fluid" width={"15px"} /></div>
                                                        <div class="green_text text-center">14.0%</div>
                                                        <div class="green_text text-center"><b>Epic</b></div>
                                                    </div></div>
                                                    <div className="col-2  color5"><div class="d-flex flex-column pt-2 pb-3">
                                                        <div class="text-center"><img src={colorcircle3} className="img-fluid" width={"15px"} /></div>
                                                        <div class="green_text text-center">8.5%</div>
                                                        <div class="green_text text-center"><b>Legendry</b></div>
                                                    </div></div>
                                                    <div className="col-2 color6"><div class="d-flex flex-column pt-2 pb-3">
                                                        <div class="text-center"><img src={colorcircle4} className="img-fluid" width={"15px"} /></div>
                                                        <div class="green_text text-center">1.5%</div>
                                                        <div class="green_text text-center"><b>Mythic</b></div>
                                                    </div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6 detail_bg' style={{height:"auto"}}>
                                       <div className='row mt-3'>
                                        <div className='col-12'>
                                            <div className='d-flex justify-content-around mt-3'>
                                                <div className='align-self-center balance_text'>
                                                    Balance:
                                                </div>
                                                <div className='align-self-center Point_bg'>
                                                    <span><b>100,000</b></span> iBBR Point
                                                </div>
                                            </div>
                                        </div>
                                       </div>
                                       <div className='row mt-3'>
                                        <div className='col-12 borderLine '></div>
                                       </div>
                                       <div className='row mt-3' >
                                        <div className='col-12' >
                                            <div className='text-center luckyDrawAmount_text'>
                                            Lucky Draw Amount
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
        </div>
    )
}

export default LuckyDraw