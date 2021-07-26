import React from "react";
import ReactDOM from "react-dom";
import HeaderContainer from "./Containers/HeaderContainer";
import Film from "./Views/Film";

ReactDOM.render(
  <React.StrictMode>
    <HeaderContainer />
    <Film />
  </React.StrictMode>,
  document.getElementById("root"),
);
