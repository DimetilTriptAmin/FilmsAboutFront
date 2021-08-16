import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Menu, MenuItem, Typography } from "@material-ui/core";

import useStyles from "./styles";

const AccountMenu = ({
  isMenuOpen,
  anchorEl,
  handleMenuClose,
  handleMenuOpen,
  username,
  handleLogOut,
  handleSettings,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
      <IconButton
        edge='end'
        aria-label='account of current user'
        aria-haspopup='true'
        color='inherit'
        onClick={handleMenuOpen}
      >
        <Typography className={classes.title} variant='h6' noWrap>
          {username}
        </Typography>
        <AccountCircle />
      </IconButton>

      <Menu
        disableScrollLock={true}
        className={classes.menu}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem className={classes.menuItem} onClick={handleSettings}>
          Settings
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleLogOut}>
          Log out
        </MenuItem>
      </Menu>
    </div>
  );
};

AccountMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  anchorEl: PropTypes.any,
  handleMenuClose: PropTypes.func.isRequired,
  handleMenuOpen: PropTypes.func.isRequired,
  Username: PropTypes.string,
};

export default AccountMenu;
