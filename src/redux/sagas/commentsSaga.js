import { call, put, takeEvery } from "redux-saga/effects";

import { axiosDefault } from "../../axios";
import {
  commentsFetchedSuccess,
  commentsFetchedFail,
} from "../slices/commentsSlice";
import { enqueueSnackbarError } from "../slices/notificationSlice";

function* sagaCommentsRequest(data) {
  try {
    const response = yield call(
      axiosDefault,
      `https://localhost:44364/api/Comment/forFilm${data.payload}`,
      "get",
    );
    if (response.status === 200)
      yield put(commentsFetchedSuccess(response.data));
    else {
    }
  } catch (err) {
    yield put(
      enqueueSnackbarError({
        message: "internal server error",
        key: new Date().getTime() + Math.random(),
      }),
    );
    yield put(commentsFetchedFail());
  }
}

export function* commentsWatcher() {
  yield takeEvery("COMMENTS_REQUEST", sagaCommentsRequest);
}
