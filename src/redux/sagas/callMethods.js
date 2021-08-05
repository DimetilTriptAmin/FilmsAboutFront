import { call } from "@redux-saga/core/effects";

import { axiosDefault } from "../../axios";

export function* filmListRequest() {
  return yield call(axiosDefault, `https://localhost:44364/api/Film`, "get");
}

export function* userByIdRequest(payload) {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/User/${payload}`,
    "get",
  );
}

export function* logInRequest(payload) {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/User/login`,
    "post",
    JSON.stringify(payload),
  );
}

export function* registrationRequest(payload) {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/User/register`,
    "post",
    JSON.stringify(payload),
  );
}

export function* logOutRequest() {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/User/logout`,
    "delete",
    null,
    window.localStorage.getItem("accessToken"),
  );
}

export function* commentsRequest(payload) {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/Comment/forFilm${payload}`,
    "get",
  );
}

export function* filmRequest(payload) {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/Film/${payload}`,
    "get",
  );
}

export function* goToFilmRequest(payload) {
  yield call(payload.push, "/film" + payload.id);
}

export function* ratingByPairIdRequest(payload) {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/Rating/getByPair?filmId=${payload.filmId}&userId=${payload.userId}`,
    "get",
  );
}
