import React from "react";
import FilmCardContainer from "../../containers/FilmCardContainer";
import { useStyles } from "./styles";
import { Container } from "@material-ui/core";
import { Oval } from "@agney/react-loading";
import { ErrorOutline } from "@material-ui/icons";

const FilmCardList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {props.films.isLoading ? (
        <Container className={`${classes.metaComponent} ${classes.flex}`}>
          <Oval width='100' color='#fff' />
        </Container>
      ) : props.films.Loaded ? (
        <div>
          <div className={classes.title}>
            Watch your favorite movies on <span>Films About</span>
          </div>
          <div className={classes.cards}>
            {props.films.films.map((film) => (
              <div className={classes.item} key={film.id}>
                <FilmCardContainer film={film} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`${classes.metaComponent} ${classes.flex}`}>
          <ErrorOutline
            style={{ fontSize: 200, color: "#fff", margin: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export { FilmCardList };
