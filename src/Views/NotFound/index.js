import React from "react";
import { ErrorOutline } from "@material-ui/icons";

import useStyles from "./styles.js";

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.baseFlexElement} ${classes.headerContainer}`}>
      <div className={`${classes.baseFlexElement} ${classes.header}`}>
        <ErrorOutline style={{ fontSize: 200, color: "#fff" }} />
        <p className={classes.text}>404 NOT FOUND</p>
      </div>
    </div>
  );
};

export default NotFound;
