import React from "react";

export default function NavbarHome() {
  return (
    <div>
      {/* navbar có flex sẵn rồi  */}
      <nav className="navbar navbar-expand-lg">
        <div className="  col-xl-4">
          <div className="header__left">
            <a className="navbar-brand" href="#">
              <img src="./../../../../logomain.png" width="220  " alt />
            </a>
          </div>
        </div>
        <div className=" col-xl-8 ">
          <div className="header__right">
            <ul className="navbar-nav">
              <li className="nav-item business">
                <a className="nav-link" href="#">
                  Lịch Chiếu
                </a>
              </li>
              <li className="nav-item teach">
                <a className="nav-link" href="#">
                  Cụm Rạp
                </a>
              </li>
              <li className="nav-item teach">
                <a className="nav-link" href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item teach">
                <a className="nav-link" href="#">
                  Ứng Dụng
                </a>
              </li>
              <li className="nav-item nav__buton    ">
                <button className="udeBTN-white ">Log in</button>
                <button className="udeBTN-red ">Sign up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
