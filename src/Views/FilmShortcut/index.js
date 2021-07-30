import { Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import React from "react";

import useStyles from "./styles";

const FilmShortcut = ({ poster, title, rating }) => {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
      <img
        src={`data:image/jpeg;base64,${poster}`}
        alt='poster'
        className={classes.poster}
      />
      <Typography variant='h6' className={classes.text}>
        {title}
      </Typography>
      <div className={classes.rating}>
        <StarIcon style={{ fontSize: 30, color: "#ffb500" }}></StarIcon>
        <Typography variant='h6'>{rating}</Typography>
      </div>
    </div>
  );
};

export { FilmShortcut };
