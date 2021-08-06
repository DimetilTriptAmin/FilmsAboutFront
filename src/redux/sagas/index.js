import { all } from "redux-saga/effects";

import { regExpRequestSagaWatcher } from "./genericSaga";

export function* rootSaga() {
  yield all([regExpRequestSagaWatcher()]);
}
