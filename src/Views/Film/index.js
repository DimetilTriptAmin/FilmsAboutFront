import React from "react";
import ReactPlayer from "react-player";
import { Container, Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarIcon from "@material-ui/icons/Star";

import useStyles from "./styles";

const Film = ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className={classes.content}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-start'
        spacing={3}
      >
        <Grid item xs={4}>
          <Container>
            <img
              className={classes.poster}
              src='https://i.pinimg.com/originals/30/59/ca/3059caf3374bdf0973745591797d2bcb.jpg'
              alt='poster'
            />
          </Container>
          <div className={classes.userRate}>
            <Typography className={classes.text} variant='h5'>
              Your rate:
            </Typography>
            <Rating
              className={classes.rating}
              name='simple-controlled'
              value={value}
              onChange={onChange}
            />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Container>
            <div className={classes.title}>
              <Typography className={classes.text} variant='h4'>
                The Gentelmen
              </Typography>
              <div className={classes.fetchedRate}>
                <StarIcon style={{ fontSize: 50, color: "#ffb500" }}></StarIcon>
                <Typography variant='h4' className={classes.text}>
                  4.9
                </Typography>
              </div>
            </div>
            <Typography className={classes.text} variant='h6'>
              Один ушлый американец ещё со студенческих лет приторговывал
              наркотиками, а теперь придумал схему нелегального обогащения с
              использованием поместий обедневшей английской аристократии и очень
              неплохо на этом разбогател. Другой пронырливый журналист приходит
              к Рэю, правой руке американца, и предлагает тому купить
              киносценарий, в котором подробно описаны преступления его босса
              при участии других представителей лондонского криминального мира —
              партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже
              русского олигарха.
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <div className={classes.playerContainer}>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          controls
          width='800px'
          height='500px'
        />
      </div>
    </Container>
  );
};

export default Film;
