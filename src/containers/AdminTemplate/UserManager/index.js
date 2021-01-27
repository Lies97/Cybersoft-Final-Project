import React, { Component } from "react";
import Users from "./../../../components/Users/index";
import { actUserManagerApi } from "./modules/action";
import { connect } from "react-redux";
import "./../../../index.css";
import UserPage from "../UserPage";
import DeleteUser from "../DeleteUser";

class ListUser extends Component {
  componentDidMount() {
    this.props.userManagerApi();
  }
  handleDeleteUser = (taiKhoan) => {
    <DeleteUser taiKhoan={taiKhoan} />;
  };

  renderHMTL = () => {
    const { listUser } = this.props;
    if (listUser && listUser.length > 0) {
      return listUser.map((User) => {
        return (
          <Users
            user={User}
            key={User.index}
            handleDeleteUser={this.handleDeleteUser()}
          />
        );
      });
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
                <h5 className="modal-title">Giỏ hàng</h5>
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
        <table className="table" className="container">
          <thead>
            <tr>
              <th>UserName</th>
              <th>FullName</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>PassWord</th>
              <th>nut</th>
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userManagerApi: () => dispatch(actUserManagerApi()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
