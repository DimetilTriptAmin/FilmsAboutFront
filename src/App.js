import React from "react";
import { Container } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

import NotificationContainer from "./Containers/NotificationContainer";
import HeaderContainer from "./Containers/HeaderContainer";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <Container maxWidth='lg' style={{ backgroundColor: "#242322" }}>
      <NotificationContainer
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        TransitionComponent={Slide}
      />
      <HeaderContainer />
      <AppRouter />
    </Container>
  );
};

App.propTypes = {};

export default App;
