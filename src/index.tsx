import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

const render = (Component: FunctionComponent) => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

render(App);
