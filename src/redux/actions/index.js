import { createAction } from "@reduxjs/toolkit";

export const filmListRequest = createAction("ALL_FILM_REQUEST");
export const filmRequest = createAction("FILM_REQUEST");
export const commentsRequest = createAction("COMMENTS_REQUEST");
export const ratinfByPairIdRequest = createAction("RATING_BY_PAIR_ID_REQUEST");
export const userById = createAction("USER_REQUEST");
