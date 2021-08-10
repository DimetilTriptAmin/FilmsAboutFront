import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutRequest, goToSettingsRequest } from "../redux/actions";
import { withRouter } from "react-router";
import { usernameSelector } from "../redux/selectors";
import { userRequest } from "../redux/actions";

import AccountMenu from "../views/AccountMenu";

const AccountMenuContainer = ({history}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const dispatch = useDispatch();
  const username = useSelector(usernameSelector);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(logOutRequest());
    setAnchorEl(null);
  };

  const handleSettings = () => {
    dispatch(goToSettingsRequest({ push: history.push }));
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(userRequest());
  }, [dispatch]);

  return (
    <AccountMenu
      handleMenuOpen={handleMenuOpen}
      handleMenuClose={handleMenuClose}
      isMenuOpen={isMenuOpen}
      anchorEl={anchorEl}
      handleLogOut={handleLogOut}
      handleSettings={handleSettings}
      username={username}
    />
  );
};

export default withRouter(AccountMenuContainer);
