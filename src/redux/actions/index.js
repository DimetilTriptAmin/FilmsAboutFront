import { createAction } from "@reduxjs/toolkit";

export const goToFilmRequest = createAction("film/GO_TO_FILM_REQUEST");
export const filmRequest = createAction("film/FILM_REQUEST");

export const commentListRequest = createAction(
  "commentList/COMMENT_LIST_REQUEST",
);

export const currentFilmRatingRequest = createAction(
  "user/CURRENT_FILM_RATING_REQUEST",
);

export const setFilmRatingRequest = createAction(
  "user/SET_FILM_RATING_REQUEST",
);

export const userRatingRequest = createAction("ratingList/USER_RATING_REQUEST");

export const filmListRequest = createAction("filmList/FILM_LIST_REQUEST");

export const logInRequest = createAction("user/LOG_IN_REQUEST"); // change
export const logOutRequest = createAction("user/LOG_OUT_REQUEST"); // change
export const registrationRequest = createAction("user/REGISTRATION_REQUEST"); // change
