import React from "react";
import Slide from "@material-ui/core/Slide";
import FilmContainer from "./Containers/FilmContainer";
import { FilmCardListContainer } from "./Containers/FilmCardListContainer";
import HeaderContainer from "./Containers/HeaderContainer";
import UserSettingsContainer from "./Containers/UserSettingsContainer";
import NotificationContainer from "./Containers/NotificationContainer";

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <NotificationContainer
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        TransitionComponent={Slide}
      />
      {/* <FilmCardListContainer /> */}
      <FilmContainer />
      <UserSettingsContainer />
    </div>
  );
};

App.propTypes = {};

export default App;
