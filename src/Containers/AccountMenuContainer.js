import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutRequest, goToSettingsRequest } from "../redux/actions";
import { withRouter } from "react-router";
import { usernameSelector, accessTokenSelector } from "../redux/selectors";

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

  // get userId from access token, get userinfo by get_user_by_id, send username prop to view component
  useEffect(() => {
    dispatch()
    const userId = accessTokenSelector()
    const id = dispatch(userByIdRequest())
    dispatch(userByIdRequest(id));
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
