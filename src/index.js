import React from 'react';
import ReactDOM from 'react-dom';
import {FilmCardListContainer} from './Containers/FilmCardListContainer';
import HeaderContainer from './Containers/HeaderContainer';
import Film from "./Views/Film";


ReactDOM.render(
  <React.StrictMode>
    <HeaderContainer />
    <FilmCardListContainer />
    <Film />

  </React.StrictMode>,
  document.getElementById("root"),
);
