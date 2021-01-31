import React, { Component } from "react";
import MovieAdmin from "../../../components/MovieAdmin";
import { actListMovieApi } from "../../HomeTemplate/DangChieu/modules/actions";
import { connect } from "react-redux";
import AddFilm from "../AddFilm";
import Axios from "axios";
import { actMovieListDeleteFailed } from "./../../HomeTemplate/DangChieu/modules/actions";
const mockFilm = {
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
class FilmManeger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      data: {},
    };
  }
  componentDidMount() {
    this.props.listMovieApi();
  }

  handleDeleteFilm = (id) => {
    this.props.deleteFilmAPI(id);
    this.openMessage();
  };

  getSelectedUser = (data) => {
    this.setState({
      movie: data,
    });
  };

  renderHMTL = () => {
    const { listMovie } = this.props;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return (
          <MovieAdmin
            movie={movie}
            handleDeleteFilm={this.handleDeleteFilm}
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
      alert("Phim chưa thể xóa được");
    }
  };

  resetIsEdit = () => {
    this.setState({
      isEdit: false,
    });
  };

  clickedEdit = () => {
    this.setState({
      isEdit: true,
    });
  };

  handleEdit = () => {
    const { data } = this.state;
    let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/demo",
      method: "PUT",
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {})
      .catch((err) => {
        console.log("err", err);
      });
  };

  getInputData = (label, value) => {
    const { movie } = this.state;
    this.setState({
      data: {
        ...movie,
        [label]: value,
      },
    });
  };

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
                <AddFilm
                  movie={isEdit ? this.state.movie : mockFilm}
                  isEdit={isEdit}
                  getInputData={this.getInputData}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={isEdit && this.handleEdit}
                >
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
          Add phim
        </button>
        <table className="table" className="container">
          <thead className="mb-5">
            <tr>
              <th>Mã Phim</th>
              <th>Tên Phim</th>
              <th>Ngày khởi chiếu</th>
              <th>Hình Ảnh</th>
              <th>Tác vụ</th>
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
    loading: state.listMovieReducer.loading,
    listMovie: state.listMovieReducer.data,
    errorDelete: state.listMovieReducer.errorDelete,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    listMovieApi: () => dispatch(actListMovieApi()),
    deleteFilmAPI: (id) => {
      dispatch(actMovieListDeleteFailed(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilmManeger);
