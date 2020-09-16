import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./reducer/index";

const MyApp = React.lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback="<h1>Loading. . .</h1>">
    <Provider store={store}>
      <MyApp name="SpaceX Launch Programs" />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
