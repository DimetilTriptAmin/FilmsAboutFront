import React from "react";
import FilmCardContainer from "../../containers/FilmCardContainer";
import { useStyles } from "./styles";
import { Oval } from "@agney/react-loading";
import { ErrorOutline } from "@material-ui/icons";

const FilmCardList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {props.films.isLoading ? (
        <div className={`${classes.metaComponent} ${classes.flex}`}>
          <Oval width='100' color='#fff' />
        </div>
      ) : props.films.Loaded ? (
        <div>
          <div className={classes.title}>
            Watch your favorite movies on <span>Films About</span>
          </div>
          <div className={classes.cards}>
            {props.films.films.map((filmData) => (
              <div className={classes.item} key={filmData.id}>
                <FilmCardContainer filmData={filmData} />
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
