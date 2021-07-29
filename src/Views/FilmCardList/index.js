import React from "react";
import FilmCardContainer from "../../containers/FilmCardContainer";
import { useStyles } from "./styles";

const FilmCardList = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.title}>
          Watch your favorite movies on Film About
        </div>
        <div className={classes.cards}>
          {props.films.map((film) => (
            <div className={classes.item} key={film.id}>
              <FilmCardContainer film={film} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { FilmCardList };
