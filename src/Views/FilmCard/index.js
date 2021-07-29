import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";

const FilmCard = (props) => {
  const classes = useStyles();
  console.log(props.poster);
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          title={props.title}
          subheader={
            <Typography
              className={classes.rating}
            >{`Rating: ${props.rating}`}</Typography>
          }
        />
        <CardMedia className={classes.media} image={props.poster} />
        <CardContent className={classes.cardContent}>
          <Typography variant='body2' component='div'>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.button} onClick={props.handleClick}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export { FilmCard };
