import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FilmCardListContainer from "./containers/FilmCardListContainer";
import FilmContainer from "./containers/FilmContainer";
import UserSettingsContainer from "./containers/UserSettingsContainer";
import NotFound from "./views/NotFound";
import HeaderContainer from "./containers/HeaderContainer";
import LoginContainer from "./containers/LoginContainer";
import RegistrationContainer from "./containers/RegistrationContainer";

const AppRouter = () => {
  return (
    <Router>
      <HeaderContainer />
      <Switch>
        <Route exact path='/'>
          <FilmCardListContainer />
        </Route>
        <Route path='/film:id'>
          <FilmContainer />
        </Route>
        <Route path='/profile'>
          <UserSettingsContainer />
        </Route>
        <Route path='/login'>{<LoginContainer />}</Route>
        <Route path='/registration'>
          <RegistrationContainer />
        </Route>
        <Router path='*'>
          <NotFound />
        </Router>
      </Switch>
    </Router>
  );
};

AppRouter.propTypes = {};

export default AppRouter;
