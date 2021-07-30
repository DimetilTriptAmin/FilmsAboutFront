import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";
import AccountMenuContainer from "../../containers/AccountMenuContainer";
import AuthorizationMenuContainer from "../../containers/AuthorizationMenuContainer";

const Header = ({ isAuthorized, onLogoClick }) => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.header}>
      <Toolbar>
        <Button onClick={onLogoClick}>
          <Typography className={classes.title} variant='h6' noWrap>
            Films About
          </Typography>
        </Button>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.grow} />
        {isAuthorized ? (
          <AccountMenuContainer />
        ) : (
          <AuthorizationMenuContainer />
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

export default Header;
