import React, { Component } from "react";
// import DeleteUser from "./../../containers/AdminTemplate/DeleteUser/index";
export default class MovieAdmin extends Component {
  render() {
    const { movie } = this.props;
    return (
      <tr>
        <td>{movie.maPhim}</td>
        <td>{movie.tenPhim}</td>
        <td>{movie.ngayKhoiChieu}</td>
        <td>
          <img
            src={movie.hinhAnh}
            style={{ width: "100px", height: "150px" }}
          />
        </td>
        <td>
          <button className="btn btn-info ">Edit</button>
          <button className="btn btn-danger">xoa</button>
        </td>
      </tr>
    );
  }
}
