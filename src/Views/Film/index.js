import React from "react";
import ReactPlayer from "react-player";
import { Container, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarIcon from "@material-ui/icons/Star";
import { Oval } from "@agney/react-loading";

import useStyles from "./styles";

import { ErrorOutline } from "@material-ui/icons";

import CommentContainer from "../../Containers/CommentContainer";

const Film = ({ filmData, comments }) => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      {!filmData.isLoading ? (
        <div>
          {!filmData.Loaded ? (
            <div className={`${classes.metaComponent} ${classes.flex}`}>
              <ErrorOutline
                style={{ fontSize: 200, color: "#fff", margin: "auto" }}
              />
            </div>
          ) : (
            <Container className={classes.content}>
              <div className={`${classes.flex} ${classes.flexWrap}`}>
                <Container className={classes.poster}>
                  <img
                    className={classes.posterImg}
                    src={filmData.poster}
                    alt='poster'
                  />

                  <div className={`${classes.userRate} ${classes.flex}`}>
                    <Typography
                      className={`${classes.text} ${classes.rateText}`}
                      variant='h6'
                    >
                      Rate it:
                    </Typography>
                    <Rating
                      className={classes.rating}
                      name='simple-controlled'
                      //value={value}
                      //onChange={onChange}
                    />
                  </div>
                </Container>

                <Container className={`${classes.about} ${classes.flex}`}>
                  <div className={`${classes.flex} ${classes.title}`}>
                    <Typography className={classes.text} variant='h4'>
                      {filmData.title}
                    </Typography>

                    <div className={classes.flex}>
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
              </div>

              <div className={`${classes.playerContainer} ${classes.flex}`}>
                <ReactPlayer
                  url={filmData.trailerLink}
                  controls
                  width='800px'
                  height='500px'
                />
              </div>
              <div className={classes.divider} />
              <Container>
                <Typography
                  className={`${classes.text} ${classes.headerText}`}
                  variant='h4'
                  align='justify'
                >
                  Comments
                </Typography>
              </Container>
              <div className={classes.divider} />
              <Container maxWidth='lg'>
                {comments.comments.map((comment, key) => (
                  <CommentContainer
                    text={comment.text}
                    publishDate={comment.publishDate}
                    userId={comment.userId}
                    filmId={comment.filmId}
                    key={key}
                  />
                ))}
              </Container>
            </Container>
          )}
        </div>
      ) : (
        <Container className={`${classes.metaComponent} ${classes.flex}`}>
          <Oval width='100' color='#fff' />
        </Container>
      )}
    </Container>
  );
};

export default Film;
