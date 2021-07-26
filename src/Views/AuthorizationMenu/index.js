import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

import useStyles from "./styles";

const AuthorizationMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
      <ButtonGroup
        color='primary'
        variant='text'
        aria-label='text primary button group'
      >
        <Button className={classes.menuItem}>Login</Button>
        <Button className={classes.menuItem}>Register</Button>
      </ButtonGroup>
    </div>
  );
};

export default AuthorizationMenu;
