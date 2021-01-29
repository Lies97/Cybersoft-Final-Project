import React, { Component } from "react";
import Users from "./../../../components/Users/index";
import { actUserManagerApi } from "./modules/action";
import { connect } from "react-redux";
import "./../../../index.css";
import UserPage from "../UserPage";
import { actUserListDeleteAPI } from "./modules/action";

// import DeleteUser from "../DeleteUser";

class ListUser extends Component {
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

  renderHMTL = () => {
    const { listUser } = this.props;
    if (listUser && listUser.length > 0) {
      return listUser.map((User) => {
        return (
          <Users
            user={User}
            key={User.index}
            handleDeleteUser={this.handleDeleteUser}
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

  render() {
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
                <UserPage />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
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
        >
          add user
        </button>
        <input
          type="text"
          class="form-control"
          placeholder="Tên nhân viên"
          id="searchName"
        ></input>
        <table className="table" className="container">
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
