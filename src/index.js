import React from "react";
import { render } from "react-dom";
import App from "./components/App";

render(
  <>
    <App first="first" second="second" third="third"></App>
  </>,
  document.getElementById("root")
);
