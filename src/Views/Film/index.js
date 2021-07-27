import React from "react";
import ReactPlayer from "react-player";
import { Container, Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarIcon from "@material-ui/icons/Star";
import { Oval } from "@agney/react-loading";

import useStyles from "./styles";

const Film = ({ value, onChange, filmData }) => {
  const classes = useStyles();
  return (
    <Container>
      {filmData ? (
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
                  src={filmData.poster}
                  alt='poster'
                />

                <div className={classes.userRate}>
                  <Typography className={classes.rateText} variant='h6'>
                    Rate it:
                  </Typography>
                  <Rating
                    className={classes.rating}
                    name='simple-controlled'
                    value={value}
                    onChange={onChange}
                  />
                </div>
              </Container>
            </Grid>
            <Grid item xs={8}>
              <Container>
                <div className={classes.title}>
                  <Typography className={classes.text} variant='h4'>
                    {filmData.title}
                  </Typography>

                  <div className={classes.fetchedRate}>
                    <StarIcon
                      style={{ fontSize: 50, color: "#ffb500" }}
                    ></StarIcon>

                    <Typography variant='h4' className={classes.text}>
                      {filmData.rating}
                    </Typography>
                  </div>
                </div>

                <Typography
                  className={classes.text}
                  variant='h6'
                  align='justify'
                >
                  {filmData.description}
                </Typography>
              </Container>
            </Grid>
          </Grid>
          <div className={classes.playerContainer}>
            <ReactPlayer
              url={filmData.trailerLink}
              controls
              width='800px'
              height='500px'
            />
          </div>
        </Container>
      ) : (
        <Container className={classes.loader}>
          <Oval width='100' />
        </Container>
      )}
    </Container>
  );
};

export default Film;
