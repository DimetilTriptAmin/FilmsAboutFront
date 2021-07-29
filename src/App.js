import React from "react";
import HeaderContainer from "./Containers/HeaderContainer";
import AppRouter from "./AppRouter";
import { Container } from "@material-ui/core";
import NotificationContainer from "./Containers/NotificationContainer";
import Slide from "@material-ui/core/Slide";

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
