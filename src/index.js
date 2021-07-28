import React from "react";
import ReactDOM from "react-dom";
import { FilmCardListContainer } from "./Containers/FilmCardListContainer";
import HeaderContainer from "./Containers/HeaderContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import FilmContainer from "./Containers/FilmContainer";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HeaderContainer />
      {/* <FilmCardListContainer /> */}
      <FilmContainer id={3} />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
