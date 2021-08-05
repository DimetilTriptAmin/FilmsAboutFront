import { all } from "redux-saga/effects";

import { regExpRequestSagaWatcher } from "./genericSaga";
import { ratingWatcher } from "./ratingSaga";
import { userWatcher } from "./userSaga";

export function* rootSaga() {
  yield all([regExpRequestSagaWatcher(), ratingWatcher(), userWatcher()]);
}
