import { createAction } from "@reduxjs/toolkit";
import { REQUESTS } from "../../helper/constants";

export const goToFilmRequest = createAction(REQUESTS.goToFilmRequest);

export const filmListRequest = createAction(REQUESTS.filmListRequest);
export const filmRequest = createAction(REQUESTS.filmRequest);
export const commentsRequest = createAction(REQUESTS.commentsRequest);
export const ratinfByPairIdRequest = createAction(
  REQUESTS.ratinfByPairIdRequest,
);
export const userById = createAction(REQUESTS.userById);
export const logInRequest = createAction(REQUESTS.logInRequest);
export const logOutRequest = createAction(REQUESTS.logOutRequest);
export const registrationRequest = createAction(REQUESTS.registrationRequest);
