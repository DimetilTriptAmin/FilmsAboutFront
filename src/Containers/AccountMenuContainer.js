import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutRequest } from "../redux/actions";
import { withRouter } from "react-router";

import AccountMenu from "../views/AccountMenu";

const AccountMenuContainer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const dispatch = useDispatch();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  return (
    <AccountMenu
      handleMenuOpen={handleMenuOpen}
      handleMenuClose={handleMenuClose}
      isMenuOpen={isMenuOpen}
      anchorEl={anchorEl}
      handleLogOut={handleLogOut}
    />
  );
};

const AccountMenuContainerWithRouter = withRouter(AccountMenuContainer);
export default AccountMenuContainerWithRouter;
