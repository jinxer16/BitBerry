import React from "react";
import work from "../../Assets/Images/work.png";
import work1 from "../../Assets/Images/WorkPic-01.png";
import work2 from "../../Assets/Images/workPic2-01.png";
import image1 from "../../Assets/Images/pic1-01.png";
import image2 from "../../Assets/Images/pic2-01.png";
import image3 from "../../Assets/Images/pic3-01.png";
import image4 from "../../Assets/Images/pic4-01.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import Bottomline from "../../Assets/Images/inputBottomLine.png";

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
        <div className="col-md-4 col-sm-12 subHeading mx-auto">
          <img src={Circle} width={"40px"} className="imgHowWeWork" />
          how we work
        </div>
      </div>
      <div className="row bgImage  d-flex justify-content-center mt-4">
        <div className="col-md-3 ">
          <img src={work1} className="img-fluid imgHowWork1" alt="" />
        </div>
        <div className="col-md-6 mt-5">
          <div className="row imgContainer2 ">
            <div className="col-md-2 ">
              <div className="mt-4">
                <span className="txtHeading">01</span>
                <img src={Bottomline} className="img-fluid" />
                <p className="eco-para">
                  Research and orient potential webtoonl IP
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="mt-4">
                <span className="txtHeading">02</span>
                <img src={Bottomline} className="img-fluid" />

                <p className="eco-para">
                  Purchase IP rights by crowdfunding on Bitberry Launchpad
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="mt-4">
                <span className="txtHeading">03</span>
                <img src={Bottomline} className="img-fluid" />

                <p className="eco-para">
                  License characters and distribute webtoon IP
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="mt-4">
                <span className="txtHeading">04</span>
                <img src={Bottomline} className="img-fluid" />
                <p className="eco-para">
                  Share revenue with investors and creators
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="mt-4">
                <span className="txtHeading">05</span>
                <img src={Bottomline} className="img-fluid" />
                <p className="eco-para">Distribute content globally</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="mt-4">
                <span className="txtHeading">06</span>
                <img src={Bottomline} className="img-fluid" />
                <p className="eco-para">
                  Develop the next set of webtoon content{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <img src={work2} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;