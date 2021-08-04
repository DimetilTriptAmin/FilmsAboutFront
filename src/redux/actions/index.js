import { createAction } from "@reduxjs/toolkit";

export const filmListRequest = createAction("ALL_FILM_REQUEST");
export const filmRequest = createAction("FILM_REQUEST");
export const commentsRequest = createAction("COMMENTS_REQUEST");
export const ratinfByPairIdRequest = createAction("RATING_BY_PAIR_ID_REQUEST");
export const userById = createAction("USER_REQUEST");
export const logInRequest = createAction("LOG_IN_REQUEST");
export const logOutRequest = createAction("LOG_OUT_REQUEST");
export const registrationRequest = createAction("REGISTRATION_REQUEST");
