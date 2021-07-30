import React from "react";
import { withRouter } from "react-router";

import Header from "../views/Header";

const HeaderContainer = ({ history }) => {
  const onLogoClick = () => {
    history.push("/");
  };

  return <Header isAuthorized={false} onLogoClick={onLogoClick} />;
};

const HeaderContainerWithRouter = withRouter(HeaderContainer);
export default HeaderContainerWithRouter;
