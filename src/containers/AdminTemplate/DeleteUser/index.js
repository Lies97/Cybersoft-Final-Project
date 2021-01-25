import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteUserApi } from "./modules/action";
class DeleteUser extends Component {
  componentDidMount() {
    this.props(this.props.taiKhoan);
    // if (this.props.taiKhoan !== 0) {
    //   this.props.xoaUser(this.props.taiKhoan);
    // }
  }
  render() {
    return <div></div>;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    xoaUser: (taiKhoan) => {
      dispatch(actDeleteUserApi(taiKhoan));
    },
  };
};

export default connect(null, mapDispatchToProps)(DeleteUser);
