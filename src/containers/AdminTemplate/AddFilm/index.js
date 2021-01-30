import React, { Component } from "react";
import { actAddFilmApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "./../../../components/Loader";

class AddPhim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      maNhom: "",
      ngayKhoiChieu: "",
      danhGia: "",
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFilm(this.state);
  };

  renderNoti = () => {
    const { error } = this.props;
    if (error) {
      if (error.response && error.response.status === 401)
        return <div className="alert alert-danger">Chua co token</div>;
      if (error.response && error.response.data) {
        return <div className="alert alert-danger">{error.response.data}</div>;
      }
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h3>Thêm phim</h3>
        {this.renderNoti()}
        <div className="form-group">
          <span>Mã phim</span>
          <input
            className="form-control"
            name="maPhim"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Tên Phim</span>
          <input
            className="form-control"
            name="tenPhim"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Bí danh</span>
          <input
            className="form-control"
            name="biDanh"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Trailer</span>
          <input
            className="form-control"
            name="trailer"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Hình ảnh</span>
          <input
            className="form-control"
            name="hinhAnh"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Mô tả</span>
          <input
            className="form-control"
            name="moTa"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Mã nhóm</span>
          <input
            className="form-control"
            name="maNhom"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Ngày khởi chiếu</span>
          <input
            className="form-control"
            name="ngayKhoiChieu"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Đánh giá</span>
          <input
            className="form-control"
            name="danhGia"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Thêm Film
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.addUserReducer.loading,
    error: state.addUserReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFilm: (film) => {
      dispatch(actAddFilmApi(film));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPhim);
