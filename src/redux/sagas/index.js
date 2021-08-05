import { all } from "redux-saga/effects";

import { regExpRequestSagaWatcher } from "./genericSaga";
import { filmWatcher } from "./filmSaga";
import { commentsWatcher } from "./commentsSaga";
import { ratingWatcher } from "./ratingSaga";
import { userWatcher } from "./userSaga";

export function* rootSaga() {
  yield all([
    filmWatcher(),
    regExpRequestSagaWatcher(),
    commentsWatcher(),
    ratingWatcher(),
    userWatcher(),
  ]);
}
