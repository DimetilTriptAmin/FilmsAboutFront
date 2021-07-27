import React from 'react';
import ReactDOM from 'react-dom';
import {FilmCardListContainer} from './Containers/FilmCardListContainer';
import HeaderContainer from './Containers/HeaderContainer';
import Film from "./Views/Film";
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HeaderContainer />
      <FilmCardListContainer />
      <Film />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
