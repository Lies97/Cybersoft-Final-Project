import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesHome, routesAdmin } from "./routes/index";
import HomeTemplate from "./containers/HomeTemplate";
import Pagenotfound from "./containers/PageNotFault";
// import NavbarHome from "./components/NavbarHome";
// import News from "./components/News";

const showLayoutHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      );
    });
  }
};
// const showLayoutAdmin = (routes) => {
//   if (routes && routes.length > 0) {
//     return routes.map((item, index) => {
//       return (
//         <AdminTemplate
//           key={index}
//           exact={item.exact}
//           path={item.path}
//           Component={item.component}
//         />
//       );
//     });
//   }
// };

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showLayoutHome(routesHome)}
          {/* {showLayoutAdmin(routesAdmin)} */}
          <Route path="" Component={Pagenotfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
