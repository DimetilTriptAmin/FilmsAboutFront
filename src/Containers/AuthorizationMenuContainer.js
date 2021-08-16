import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import AuthorizationMenu from "../views/AuthorizationMenu/index";

const AuthorizationMenuContainer = ({ history }) => {
  const onLoginClick = () => {
    history.push("/login");
  };
  const onRegistrationClick = () => {
    history.push("/registration");
  };

  return (
    <AuthorizationMenu
      onLoginClick={onLoginClick}
      onRegistrationClick={onRegistrationClick}
    />
  );
};

AuthorizationMenuContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(AuthorizationMenuContainer);
