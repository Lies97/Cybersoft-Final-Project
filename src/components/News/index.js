import React from "react";
import "./../../index.css";
export default function News() {
  return (
    <div className="container news">
      <div className="col-xl-12 ">
        <ul className="d-flex news__title">
          <li>
            <a className="nav-link news__dienanh" href="#">
              Điện Ảnh 24h
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Review
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Khuyến Mãi
            </a>
          </li>
        </ul>
      </div>
      <div className="row news__items ">
        <div className="col-xl-6 news__item">
          <div className="news__item__img">
            <img src="./../../../../kieuminhtuan.jpg"></img>
          </div>

          <h5>
            <a href="#">
              “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
            </a>
          </h5>
          <p>
            Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
            độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360
            Giải Phóng!
          </p>
        </div>
        <div className="col-xl-6 news__item">
          <div className="news__item__img">
            <img src="./../../../../kieuminhtuan.jpg"></img>
          </div>
          <h5>
            <a href="#">
              “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
            </a>
          </h5>
          <p>
            Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
            độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360
            Giải Phóng!
          </p>
        </div>
        <div className="col-xl-4 news__item__child">
          <div className="news__item__img__child">
            <img src="./../../../../kieuminhtuan.jpg"></img>
          </div>
          <h5>
            <a href="#">
              “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
            </a>
          </h5>
          <p>
            Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
            độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360
            Giải Phóng!
          </p>
        </div>
        <div className="col-xl-4 news__item">
          <div className="news__item__img__child">
            <img src="./../../../../kieuminhtuan.jpg"></img>
          </div>
          <h5>
            <a href="#">
              “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
            </a>
          </h5>
          <p>
            Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
            độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360
            Giải Phóng!
          </p>
        </div>
        <div className="col-xl-4 ">
          <div className="news__item__small d-flex">
            <div className="news__item__small__img">
              <img src="./../../../../kieuminhtuan.jpg"></img>
            </div>
            <h5 className="news__title_small">
              <a href="#">
                “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
              </a>
            </h5>
          </div>
          <div className="news__item__small d-flex">
            <div className="news__item__small__img">
              <img src="./../../../../kieuminhtuan.jpg"></img>
            </div>
            <h5 className="news__title_small">
              <a href="#">
                “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
              </a>
            </h5>
          </div>
          <div className="news__item__small d-flex">
            <div className="news__item__small__img">
              <img src="./../../../../kieuminhtuan.jpg"></img>
            </div>
            <h5 className="news__title_small">
              <a href="#">
                “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
              </a>
            </h5>
          </div>
          <div className="news__item__small d-flex">
            <div className="news__item__small__img">
              <img src="./../../../../kieuminhtuan.jpg"></img>
            </div>
            <h5 className="news__title_small">
              <a href="#">
                “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
