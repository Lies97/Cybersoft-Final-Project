import DangChieu from "../containers/HomeTemplate/DangChieu";
import DatVe from '../containers/DatVeTemplate/';
export const routesHome = [
  {
    exact: true,
    path: "/",
    component: DangChieu,
  },
]
export const routesAdmin = [];


export const routesDatVe = [
  {
    exact: true,
    path: `/datve/`,
    component: DatVe,
  }
]