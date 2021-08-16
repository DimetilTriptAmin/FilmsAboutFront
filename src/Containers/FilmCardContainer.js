import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { FilmCard } from "../views/FilmCard";
import { goToFilmRequest } from "../redux/actions";

const FilmCardContainer = ({ history, filmData }) => {
  const { id, title, description, trailerLink, rating, poster } = filmData;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(goToFilmRequest({ push: history.push, title: title }));
  };

  return (
    <FilmCard
      id={id}
      title={title}
      description={description}
      rating={rating}
      poster={poster}
      trailerLink={trailerLink}
      handleClick={handleClick}
    />
  );
};

FilmCardContainer.propTypes = {
  history: PropTypes.object.isRequired,
  filmData: PropTypes.object.isRequired,
};

export default withRouter(FilmCardContainer);
