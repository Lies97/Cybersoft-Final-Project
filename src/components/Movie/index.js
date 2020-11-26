import React, { Component } from "react";
import "./../../index.css";
export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="card-wrapper">
        <div className="card">
          <div className="card-img">
            <img src={movie.hinhAnh} />
          </div>
          <div className="details">
            <p>{movie.tenPhim}</p>
          </div>
        </div>
      </div>
    );
  }
}
