import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import { SnackbarProvider } from "notistack";

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
