import { withRouter } from "react-router";
import { useDispatch } from "react-redux";

import { FilmCard } from "../views/FilmCard";
import { goToFilmRequest } from "../redux/actions";

const FilmCardContainer = ({ history, filmData }) => {
  const { id, title, description, trailerLink, rating, poster } = filmData;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(goToFilmRequest({ push: history.push, id: id }));
  };

  return (
    <FilmCard
      key={id}
      title={title}
      description={description}
      rating={rating}
      poster={poster}
      trailerLink={trailerLink}
      handleClick={handleClick}
    />
  );
};

export default withRouter(FilmCardContainer);
