import React from "react";
import { Route } from "react-router-dom";
import NavbarHome from "../../components/NavbarHome";
import News from "../../components/News";

function HomeLayout(props) {
  return (
    <div>
      <NavbarHome />
      {props.children}
      <News />
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <div>
      <Route
        {...props}
        render={(propsComponent) => (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        )}
      />
    </div>
  );
}
