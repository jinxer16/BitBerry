import React from "react";
import "./Header.css";
import Logo from "../../Assets/Images/logo.png";
import social from "../../Assets/Images/telegramIcon.png";
import social1 from "../../Assets/Images/twitterIcon.png";
import social2 from "../../Assets/Images/discordIcon.png";

function Header() {
  return (
    <div className="col-md-12 d-flex justify-content-center align-items-between">
      <nav className="navbar navbar-expand-lg navbarscreen">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} className="img-fluid img-responsive" />
          </a>
          <div className="">
            <button className="text-center btn-largescreen">
              LAUCNHPAD SOON
            </button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tokenomics
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  text-dark
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BBR Pool &nbsp;
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      LP Pool
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lucky Draw
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tier NFTs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">How we work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Documents
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Work
                </a>
              </li>
              <li className="nav-item mt-4">
                <button className="text-center btn-largescreen">
                  LAUCNHPAD SOON
                </button>
              </li>
              <li className="nav-item mt-4">
              <div className="box-1 ">
              <div className="d-flex flex-row justify-content-center">
              <div className="p-2">
                <img
                  classname="img-fluid"
                  width={"30px"}
                  height={"30px"}
                  src={social}
                />
              </div>
              <div className="p-2 ">
                <img
                  classname="img-fluid"
                  width={"30px"}
                  height={"30px"}
                  src={social1}
                />
              </div>
              <div className="p-2 ">
                <img
                  classname="img-fluid"
                  width={"30px"}
                  height={"30px"}
                  src={social2}
                />
              </div>
            </div>

              </div>
              </li>
            </ul>
          </div>
          <div className="ml-5">
            <button className="text-center btn">LAUCNHPAD SOON</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
