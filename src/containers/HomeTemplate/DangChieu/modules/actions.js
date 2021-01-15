import {
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILED,
  LIST_MOVIE_REQUEST,

} from "./constant";
import Axios from "axios";
export const actListMovieApi = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListMovieFailed(err));
      });
  };
};
export const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
  };
};
export const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    payload: data,
  };
};
export const actListMovieFailed = (err) => {
  return {
    type: LIST_MOVIE_FAILED,
    payload: err,
  };
};