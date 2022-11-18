import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <>
      <div className="carouselContainer">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-12 toggle-switch-container">
            <section id="section10" class="demo">
              <a href="">
                <span></span>Scroll Down
              </a>
            </section>
            {/* <div className="toggle-switch-container">
              <div className="toggle-switch switch-vertical">
                <input
                  id="toggle-a"
                  type="radio"
                  name="switch"
                  defaultChecked="checked"
                />
                <input id="toggle-b" type="radio" name="switch" />
                <span className="toggle-outside">
                  <span className="toggle-inside" />
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
