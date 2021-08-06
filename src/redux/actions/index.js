import { createAction } from "@reduxjs/toolkit";

export const goToFilmRequest = createAction("film/GO_TO_FILM_REQUEST");
export const filmListRequest = createAction("filmList/FILM_LIST_REQUEST");
export const filmRequest = createAction("film/FILM_REQUEST");

export const commentsRequest = createAction("comments/COMMENTS_REQUEST");

export const ratingByPairIdRequest = createAction(
  "rating/RATING_BY_PAIR_ID_REQUEST",
);

export const userById = createAction("user/USER_BY_ID_REQUEST");
export const logInRequest = createAction("user/LOG_IN_REQUEST");
export const logOutRequest = createAction("user/LOG_OUT_REQUEST");
export const registrationRequest = createAction("user/REGISTRATION_REQUEST");
