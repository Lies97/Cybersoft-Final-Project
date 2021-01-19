import React from "react";
import "./../../index.css";

export default function NavbarHome() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="./../../../../logomain.png" width="220"></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className=" col-xl-9 ">
          <div className="header__right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lịch Chiếu
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Cụm Rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Ứng Dụng
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3  d-flex dangnhap">
          <a href="#" className="nav-link d-flex">
            <img src="./../../../../avarta.png" width="35" height="35 "></img>
            <p className="ml-2"> Log in</p>
          </a>
          <a href="#" className="nav-link">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
