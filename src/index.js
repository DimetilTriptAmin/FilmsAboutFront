import React from "react";
import ReactDOM from "react-dom";
import FilmContainer from "./Containers/FilmContainer";
import HeaderContainer from "./Containers/HeaderContainer";

ReactDOM.render(
  <React.StrictMode>
    <HeaderContainer />
    <FilmContainer />
  </React.StrictMode>,
  document.getElementById("root"),
);
