import React, { Component } from "react";
// import DeleteUser from "./../../containers/AdminTemplate/DeleteUser/index";
export default class Users extends Component {
  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.taiKhoan}</td>
        <td>{user.hoTen}</td>
        <td>{user.email}</td>
        <td>{user.soDt}</td>
        <td>{user.matKhau}</td>
        <td>
          <button className="btn btn-info ">Edit</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleDeleteUser(user.taiKhoan);
            }}
          >
            xoa
          </button>
        </td>
      </tr>
    );
  }
}
