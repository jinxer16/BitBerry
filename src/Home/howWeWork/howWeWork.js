import React from "react";
import work from "../../Assets/Images/work.png";
import work1 from "../../Assets/Images/WorkPic-01.png";
import work2 from "../../Assets/Images/workPic2-01.png";
import image1 from "../../Assets/Images/pic1-01.png";
import image2 from "../../Assets/Images/pic2-01.png";
import image3 from "../../Assets/Images/pic3-01.png";
import image4 from "../../Assets/Images/pic4-01.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import Bottomline from "../../Assets/Images/Vector28.png";
import largeScreen from "../../Assets/Images/Group33.png";

import "./howWeWork.css";

function HowWeWork() {
  return (
    <div className="contianer howWeWork w-80 mt-5">
      <div className="row">
        <div className="col-md-12 ps-5 pe-5">
          <img src={work} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-5 col-10 subHeading-howwe mx-auto">
          <img src={Circle} width={"40px"} className="imgHowWeWork" />
          how we work
        </div>
      </div>
      <div className="row bgImageHowWe  d-flex justify-content-center mt-4">
        <div className="col-md-12 col-lg-3 d-flex justify-content-center align-items-center  ">
          <img
            src={work1}
            className="img-fluid imgHowWork1 howWeWorkMobileHidden"
            alt=""
          />
        </div>
        {/* <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
          <img src={largeScreen} alt="" className="img-fluid" />
        </div> */}
        <div className="col-md-12 col-lg-6 mt-5 d-flex justify-content-center align-items-center">
          <div className="row imgContainer2 g-0">
            <div className=" col-6 col-md-6 col-lg-2 ">
              <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
                <span className="txtHeading2">01</span>
                <img src={Bottomline} className="img-fluid" />
                <p className="txtLeftALign">
                  Research and orient potential webtoonl IP
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <div className="mt-4 d-flex flex-column justify-content-start align-items-center">
                <span className="txtHeading2">02</span>
                <img src={Bottomline} className="img-fluid" />

                <p className="txtLeftALign">
                  Purchase IP rights by crowdfunding on Bitberry Launchpad
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <div className="mt-4 d-flex flex-column justify-content-start align-items-center">
                <span className="txtHeading2">03</span>
                <img src={Bottomline} className="img-fluid" />

                <p className="txtLeftALign">
                  License characters and distribute webtoon IP
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <div className="mt-4 d-flex flex-column justify-content-start align-items-center">
                <span className="txtHeading2">04</span>
                <img src={Bottomline} className="img-fluid" />
                <p className="txtLeftALign">
                  Share revenue with investors and creators
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <div className="mt-4 d-flex flex-column justify-content-start align-items-center">
                <span className="txtHeading2">05</span>
                <img src={Bottomline} className="img-fluid" />
                <p className="txtLeftALign">Distribute content globally</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2 ">
              <div className="mt-4 d-flex flex-column justify-content-start align-items-center">
                <span className="txtHeading2">06</span>
                <img src={Bottomline} className="img-fluid" />
                <p className="txtLeftALign">
                  Develop the next set of webtoon content
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-3">
          <img
            src={work2}
            className="img-fluid imgHowWeWorkRight howWeWorkMobileHidden"
            alt=""
          />
        </div>
      </div>
    </div>
    // <div className="contianer howWeWork w-80 mt-5">
    //   <div className="row">
    //     <div className="col-md-12 ps-5 pe-5">
    //       <img src={work} className="img-fluid" alt="" />
    //     </div>
    //   </div>
    //   <div className="row mt-3">
    //     <div className="col-md-5 col-10 subHeading mx-auto">
    //       <img src={Circle} width={"40px"} className="imgHowWeWork" />
    //       how we work
    //     </div>
    //   </div>
    //   <div className="row bgImageHowWe  d-flex justify-content-center mt-4">
    //     <div className="col-md-12 col-lg-3 d-flex justify-content-center align-items-center  ">
    //       <img
    //         src={work1}
    //         className="img-fluid imgHowWork1 howWeWorkMobileHidden"
    //         alt=""
    //       />
    //     </div>
    //     {/* <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
    //       <img src={largeScreen} alt="" className="img-fluid" />
    //     </div> */}
    //     <div className="col-md-12 col-lg-6 mt-5 d-flex justify-content-center align-items-center mainCol">
    //       <div className="row imgContainer2 colContainer">
    //         <div className="col-lg-2 ">
    //           <span className="txtHeading2">01</span>
    //         </div>
    //         <div className="col-lg-2 ">
    //           <span className="txtHeading2">02</span>
    //         </div>
    //         <div className="col-lg-2 ">
    //           <span className="txtHeading2">03</span>
    //         </div>
    //         <div className="col-lg-2 ">
    //           <span className="txtHeading2">04</span>
    //         </div>
    //         <div className="col-lg-2 ">
    //           <span className="txtHeading2">05</span>
    //         </div>
    //         <div className="col-lg-2 ">
    //           <span className="txtHeading2">06</span>
    //         </div>
    //       </div>
    //       <div className="row imgContainer2 colContainer">
    //         <div className="col-lg-2 ">
    //           <img src={Bottomline} className="img-fluid" />
    //         </div>
    //         <div className="col-lg-2 ">
    //           <img src={Bottomline} className="img-fluid" />
    //         </div>
    //         <div className="col-lg-2 ">
    //           <img src={Bottomline} className="img-fluid" />
    //         </div>
    //         <div className="col-lg-2 ">
    //           <img src={Bottomline} className="img-fluid" />
    //         </div>
    //         <div className="col-lg-2 ">
    //           <img src={Bottomline} className="img-fluid" />
    //         </div>
    //         <div className="col-lg-2 ">
    //           <img src={Bottomline} className="img-fluid" />
    //         </div>
    //         {/* <p className="">Research and orient potential webtoonl IP</p>÷ */}
    //         {/* <div className="col-6 col-md-6 col-lg-2">
    //           <div className="mt-4">
    //             <span className="txtHeading2">02</span>
    //             <img src={Bottomline} className="img-fluid" />

    //             <p className="">
    //               Purchase IP rights by crowdfunding on Bitberry Launchpad
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-6 col-md-6 col-lg-2">
    //           <div className="mt-4">
    //             <span className="txtHeading2">03</span>
    //             <img src={Bottomline} className="img-fluid" />

    //             <p className="">License characters and distribute webtoon IP</p>
    //           </div>
    //         </div>
    //         <div className="col-6 col-md-6 col-lg-2">
    //           <div className="mt-4">
    //             <span className="txtHeading2">04</span>
    //             <img src={Bottomline} className="img-fluid" />
    //             <p className="">Share revenue with investors and creators</p>
    //           </div>
    //         </div>
    //         <div className="col-6 col-md-6 col-lg-2">
    //           <div className="mt-4">
    //             <span className="txtHeading2">05</span>
    //             <img src={Bottomline} className="img-fluid" />
    //             <p className="">Distribute content globally</p>
    //           </div>
    //         </div>
    //         <div className="col-6 col-md-6 col-lg-2 ">
    //           <div className="mt-4">
    //             <span className="txtHeading2">06</span>
    //             <img src={Bottomline} className="img-fluid" />
    //             <p className="">Develop the next set of webtoon content</p>
    //           </div>
    //         </div> */}
    //       </div>
    //     </div>
    //     <div className="col-md-12 col-lg-3">
    //       <img
    //         src={work2}
    //         className="img-fluid imgHowWeWorkRight howWeWorkMobileHidden"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default HowWeWork;
