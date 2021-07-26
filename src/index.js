import React from 'react';
import ReactDOM from 'react-dom';
import {FilmCardListContainer} from './Containers/FilmCardListContainer';
import HeaderContainer from './Containers/HeaderContainer';

ReactDOM.render(
  <React.StrictMode>
    <HeaderContainer />
    <FilmCardListContainer />
  </React.StrictMode>,
  document.getElementById("root"),
);
