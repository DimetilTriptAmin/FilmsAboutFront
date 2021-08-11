import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import { useStyles } from "./styles";

const FilmCard = ({ title, rating, poster, description, handleClick }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          title={title}
          subheader={
            <Typography
              className={classes.rating}
            >{`Rating: ${rating}`}</Typography>
          }
        />
        <CardMedia
          className={classes.media}
          image={`data:image/jpeg;base64,${poster}`}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant='body2' component='div'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.button} onClick={handleClick}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export { FilmCard };
