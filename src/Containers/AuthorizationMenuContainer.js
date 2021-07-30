import React from "react";
import AuthorizationMenu from "../views/AuthorizationMenu/index";
import { withRouter } from "react-router";

const AuthorizationMenuContainer = ({history}) => {

  const onLoginClick = () => {
    history.push('/login');
  }
  const onRegistrationClick = () => {
    history.push('/registration');
  }

  return <AuthorizationMenu onLoginClick={onLoginClick} onRegistrationClick={onRegistrationClick}/>;
};

const AuthorizationMenuContainerWithRouter = withRouter(AuthorizationMenuContainer);
export default AuthorizationMenuContainerWithRouter;
