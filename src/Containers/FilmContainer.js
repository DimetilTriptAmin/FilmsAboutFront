import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Film from "../views/Film";
import { FILM_DATA_RESET } from "../redux/slices/filmSlice";
import { CURRENT_FILM_SET_RATING } from "../redux/slices/userSlice";
import {
  filmRequest,
  commentListRequest,
  currentFilmRatingRequest,
  setFilmRatingRequest,
} from "../redux/actions";
import {
  filmDataSelector,
  userRatingSelector,
  isAuthorizedSelector,
} from "../redux/selectors";

const FilmContainer = () => {
  const dispatch = useDispatch();

  const filmData = useSelector(filmDataSelector);
  const userRating = useSelector(userRatingSelector);
  const isAuthorized = useSelector(isAuthorizedSelector);

  const { id } = useParams();

  const onRatingClick = (event, value) => {
    if (value != null) {
      dispatch(setFilmRatingRequest({ filmId: id, rate: value }));
      dispatch(CURRENT_FILM_SET_RATING(value));
    }
  };

  useEffect(() => {
    dispatch(filmRequest(id));
    dispatch(commentListRequest(id));
    if (isAuthorized) dispatch(currentFilmRatingRequest(id));
    return () => {
      dispatch(FILM_DATA_RESET());
    };
  }, [id, dispatch, isAuthorized]);

  return (
    <Film
      filmData={filmData}
      userRating={userRating}
      onRatingClick={onRatingClick}
    />
  );
};

export default FilmContainer;
