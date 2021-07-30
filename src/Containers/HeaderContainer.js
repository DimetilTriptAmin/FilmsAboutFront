import React from "react";
import { withRouter } from "react-router";

import Header from "../views/Header";

const HeaderContainer = ({ history }) => {
  const onLogoClick = () => {
    history.push("/");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Header
      isAuthorized={false}
      onLogoClick={onLogoClick}
      anchorEl={anchorEl}
      handleClick={handleClick}
    />
  );
};

const HeaderContainerWithRouter = withRouter(HeaderContainer);
export default HeaderContainerWithRouter;
