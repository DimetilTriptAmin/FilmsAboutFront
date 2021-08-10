import { call } from "@redux-saga/core/effects";

import { axiosDefault } from "../../axios";

//#region User's call Methods

export function* userRequest(payload, accessToken) {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/User`,
    "get",
    null,
    accessToken,
  );
}

export function* logInRequest(payload) {
  const response = yield call(
    axiosDefault,
    `https://localhost:44364/api/User/login`,
    "post",
    JSON.stringify(payload.values),
  );
  window.localStorage.setItem("accessToken", response.data.accessToken);
  yield call(payload.push, "/");
  return response;
}

export function* registrationRequest(payload) {
  const response = yield call(
    axiosDefault,
    `https://localhost:44364/api/User/register`,
    "post",
    JSON.stringify(payload.values),
  );
  window.localStorage.setItem("accessToken", response.data.accessToken);
  yield call(payload.push, "/");
  return response;
}

export function* logOutRequest(payload, accessToken) {
  yield window.localStorage.removeItem("accessToken");
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/User/logout`,
    "delete",
    payload,
    accessToken,
  );
}

export function* currentFilmRatingRequest(payload, accessToken) {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/Rating/getUserRating${payload}`,
    "get",
    null,
    accessToken,
  );
}

export function* goToSettingsRequest(payload) {
  yield call(payload.push, "/profile");
}

export function* setFilmRatingRequest(payload, accessToken) {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/Rating/ratefilm`,
    "post",
    payload,
    accessToken,
  );
}

//#endregion

//#region Comment's call Methods

export function* commentListRequest(payload) {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/Comment/getAll${payload}`,
    "get",
  );
}

//#endregion

//#region Film's call Methods

export function* filmListRequest() {
  return yield call(axiosDefault, `https://localhost:44364/api/Film`, "get");
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

//#endregion

//#region Rating's call Methods

export function* getUserRatingRequest(payload) {
  return yield call(
    axiosDefault,
    `https://localhost:44364/api/Rating/getUserRating?filmId=${payload.filmId}&userId=${payload.userId}`,
    "get",
  );
}

//#endregion
