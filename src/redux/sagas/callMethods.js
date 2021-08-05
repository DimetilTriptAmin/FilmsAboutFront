import { call } from "@redux-saga/core/effects";

import { axiosDefault } from "../../axios";

export function* filmListRequest() {
  return yield call(axiosDefault, `https://localhost:44364/api/Film`, "get");
}
