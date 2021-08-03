import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { UsernameSelector } from "../redux/selectors";
import AccountMenu from "../views/AccountMenu";

const AccountMenuContainer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const Username = useSelector(UsernameSelector);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AccountMenu
      handleMenuOpen={handleMenuOpen}
      handleMenuClose={handleMenuClose}
      isMenuOpen={isMenuOpen}
      anchorEl={anchorEl}
      username={Username}
    />
  );
};

export default AccountMenuContainer;
