import { all } from "redux-saga/effects";

import { filmListWatcher } from "./filmListSaga";
import { filmWatcher } from "./filmSaga";
import { commentsWatcher } from "./commentsSaga";
import { ratingWatcher } from "./ratingSaga";
import { userWatcher } from "./userSaga";

export function* rootSaga() {
  yield all([
    filmWatcher(),
    filmListWatcher(),
    commentsWatcher(),
    ratingWatcher(),
    userWatcher(),
  ]);
}
