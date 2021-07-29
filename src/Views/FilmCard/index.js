import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import fight_club_image from "../../static/images/cards/fight_club.jpg";
import { useStyles } from "./styles";

const FilmCard = (props) => {
  const classes = useStyles();

  return (
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
      <CardMedia className={classes.media} image={fight_club_image} />
      <CardContent className={classes.cardContent}>
        <Typography variant='body2' color='white' component='div'>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} size='big'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export { FilmCard };
