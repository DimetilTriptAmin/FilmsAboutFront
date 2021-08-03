import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

import { IsAuthorizedSelector } from "../redux/selectors";
import Header from "../views/Header";

const HeaderContainer = ({ history }) => {
  const onLogoClick = () => {
    history.push("/");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const IsAuthorized = useSelector(IsAuthorizedSelector);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Header
      isAuthorized={IsAuthorized}
      onLogoClick={onLogoClick}
      anchorEl={anchorEl}
      handleClick={handleClick}
    />
  );
};

const HeaderContainerWithRouter = withRouter(HeaderContainer);
export default HeaderContainerWithRouter;
