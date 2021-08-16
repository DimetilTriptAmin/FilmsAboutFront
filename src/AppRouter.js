import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FilmCardListContainer from "./containers/FilmCardListContainer";
import FilmContainer from "./containers/FilmContainer";
import UserSettingsContainer from "./containers/UserSettingsContainer";
import NotFound from "./views/NotFound";
import HeaderContainer from "./containers/HeaderContainer";
import LoginContainer from "./containers/LoginContainer";
import RegistrationContainer from "./containers/RegistrationContainer";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <HeaderContainer />
      <Switch>
        <Route exact path='/'>
          <FilmCardListContainer />
        </Route>
        <Route path='/:title' component={FilmContainer} />
        <PrivateRoute path='/profile' component={UserSettingsContainer} />
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
