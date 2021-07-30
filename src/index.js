import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

import store from "./redux/store";
import App from "./App";
import './App.scss';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
