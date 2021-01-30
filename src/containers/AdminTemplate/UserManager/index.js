import React, { Component } from "react";
import Users from "./../../../components/Users/index";
import { actUserManagerApi } from "./modules/action";
import { connect } from "react-redux";
import "./../../../index.css";
import UserPage from "../UserPage";
import { actUserListDeleteAPI } from "./modules/action";
import Axios from 'axios';
// import DeleteUser from "../DeleteUser";

const mockUser = {
  taiKhoan: "",
  matKhau: "",
  hoTen: "",
  email: "",
  soDt: "",
  maNhom: "",
  maLoaiNguoiDung: "",
}
class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      data: {},
    }
  }
  
  componentDidMount() {
    this.props.userManagerApi();
  }
  handleDeleteUser = (taiKhoan) => {
    this.props.deleteUserAPI(taiKhoan);
    this.openMessage();
  };
  // handleEditUser = (user) => {
  //   <EditUser user={user} />;
  // };

  getSelectedUser = (data) => {
    this.setState({
      user: data
    })
  }
  renderHMTL = () => {
    const { listUser } = this.props;
    if (listUser && listUser.length > 0) {
      return listUser.map((User) => {
        return (
          <Users
            user={User}
            key={User.index}
            handleDeleteUser={this.handleDeleteUser}
            resetIsEdit={this.resetIsEdit}
            clickedEdit={this.clickedEdit}
            getSelectedUser={this.getSelectedUser}
          />
        );
      });
    }
  };
  openMessage = () => {
    const { errorDelete } = this.props;
    if (errorDelete) {
      alert("Can not delete this user at the moment");
    }
  };

  resetIsEdit = () => {
    this.setState({
      isEdit: false,
    })
  }

  clickedEdit = () => {
    this.setState({
      isEdit: true,
    })
  }

  handleEdit = () => {
    const { data } = this.state;
    let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data,
      headers: {
          Authorization: `Bearer ${accessToken}`,
      }
    })
    .then((res) => {

    })
    .catch((err) => {
      console.log('err', err);
    })
  }

  getInputData = (label, value) => {
    const { user } = this.state;
    this.setState({
      data: {
        ...user,
        maLoaiNguoiDung: label == "maLoaiNguoiDung" ? value : "",
        [label]: value,
      }
    })
  }
  render() {
    const { isEdit } = this.state;
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          aria-labelledby="modelTitleId"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: 1000 }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"></h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <UserPage user={isEdit ? this.state.user : mockUser} isEdit={isEdit} getInputData={this.getInputData}/>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={isEdit && this.handleEdit}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-danger "
          data-toggle="modal"
          data-target="#modelId"
          onClick={this.resetIsEdit}
        >
          add user
        </button>
        <input
          type="text"
          class="form-control"
          placeholder="Tên nhân viên"
          id="searchName"
        ></input>
        <table className="container table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>FullName</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>PassWord</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>{this.renderHMTL()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.userManagerReducer.loading,
    listUser: state.userManagerReducer.data,
    errorDelete: state.userManagerReducer.errorDelete,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userManagerApi: () => dispatch(actUserManagerApi()),
    deleteUserAPI: (id) => {
      dispatch(actUserListDeleteAPI(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
