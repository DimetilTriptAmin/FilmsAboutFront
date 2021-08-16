import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import { isAuthorizedSelector } from "../redux/selectors";
import Header from "../views/Header";

const HeaderContainer = ({ history }) => {
  const onLogoClick = () => {
    history.push("/");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const IsAuthorized = useSelector(isAuthorizedSelector);

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

HeaderContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HeaderContainer);
