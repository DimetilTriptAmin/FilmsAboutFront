import { call } from "@redux-saga/core/effects";

import { axiosDefault } from "../../axios";

export function* filmListRequest() {
  return yield call(axiosDefault, `https://localhost:44364/api/Film`, "get");
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
