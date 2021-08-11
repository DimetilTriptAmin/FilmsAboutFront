import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Film from "../views/Film";
import { FILM_DATA_RESET } from "../redux/slices/filmSlice";
import { COMMENTS_DATA_RESET } from "../redux/slices/commentListSlice";
import { CURRENT_FILM_SET_RATING } from "../redux/slices/userSlice";
import {
  filmRequest,
  commentListRequest,
  currentFilmRatingRequest,
  setFilmRatingRequest,
  filmIdRequest,
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

  const { title } = useParams();

  const onRatingClick = (event, value) => {
    if (value != null) {
      dispatch(setFilmRatingRequest({ filmId: filmData.id, rate: value }));
      dispatch(CURRENT_FILM_SET_RATING(value));
    }
  };

  useEffect(() => {
    dispatch(filmIdRequest(title));
    if (filmData.idFetched) {
      dispatch(filmRequest(filmData.id));
      dispatch(commentListRequest(filmData.id));
      if (isAuthorized) dispatch(currentFilmRatingRequest(filmData.id));
    }
    return () => {
      dispatch(COMMENTS_DATA_RESET());
      dispatch(FILM_DATA_RESET());
    };
  }, [filmData.id, dispatch, isAuthorized, title]);

  return (
    <Film
      filmData={filmData}
      userRating={userRating}
      onRatingClick={onRatingClick}
    />
  );
};

export default FilmContainer;
