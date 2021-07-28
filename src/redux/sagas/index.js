import { filmWatcher } from "./filmSaga";
import { all } from "redux-saga/effects";
import { commentsWatcher } from "./commentsSaga";
import { ratingWatcher } from "./ratingSaga";
import { userWatcher } from "./userSaga";

export function* rootSaga() {
  yield all([filmWatcher(), commentsWatcher(), ratingWatcher(), userWatcher()]);
}
