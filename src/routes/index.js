import DangChieu from "../containers/HomeTemplate/DangChieu";
import DetailPage from "../containers/HomeTemplate/DetailPage";
import DashboardPage from "../containers/AdminTemplate/DashboardPage";
import UserPage from "../containers/AdminTemplate/UserPage";
import AuthPage from "../containers/AdminTemplate/AuthPage";
export const routesHome = [
  {
    exact: true,
    path: "/",
    component: DangChieu,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
  },
];
export const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/user",
    component: UserPage,
  },
  {
    exact: false,
    path: "/auth",
    component: AuthPage,
  },
];
