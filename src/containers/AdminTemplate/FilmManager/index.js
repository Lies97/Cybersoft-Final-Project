import React, { Component } from "react";
import MovieAdmin from "../../../components/MovieAdmin";
import { actListMovieApi } from "../../HomeTemplate/DangChieu/modules/actions";
import { connect } from "react-redux";
import AddFilm from "../AddFilm";
import { actMovieListDeleteFailed } from "./../../HomeTemplate/DangChieu/modules/actions";
class FilmManeger extends Component {
  componentDidMount() {
    this.props.listMovieApi();
  }
  renderHMTL = () => {
    const { listMovie } = this.props;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return (
          <MovieAdmin movie={movie} handleDeleteFilm={this.handleDeleteFilm} />
        );
      });
    }
  };
  handleDeleteFilm = (id) => {
    this.props.deleteFilmAPI(id);
    this.openMessage();
  };
  openMessage = () => {
    const { errorDelete } = this.props;
    if (errorDelete) {
      alert("Phim chưa thể xóa được");
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
                <AddFilm />
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
