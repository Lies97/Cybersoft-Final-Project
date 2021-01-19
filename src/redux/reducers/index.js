import listMovieReducer from "./../../containers/HomeTemplate/DangChieu/modules/reducer";
import listMovieScheduleReducer from './../../containers/HomeTemplate/TheoNgay/modules/reducer';
import listHeThongRapReducer from './../../containers/HomeTemplate/ThongTinRap/modules/reducer';

import { combineReducers } from "redux";
const rootReducer = combineReducers({
  listMovieReducer,
  listMovieScheduleReducer,
  listHeThongRapReducer
});
export default rootReducer;
