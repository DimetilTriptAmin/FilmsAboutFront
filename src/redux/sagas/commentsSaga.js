import { call, put, takeEvery } from "redux-saga/effects";
import { axiosDefault } from "../../Axios";
import {
  commentsFetchedSuccess,
  commentsFetchedFail,
} from "../slices/commentsSlice";

function* sagaCommentsRequest(data) {
  try {
    const errors = {};
    const response = yield call(
      axiosDefault,
      `https://localhost:44364/api/Comment/forFilm${data.payload}`,
      "get",
      errors,
    );
    if (!errors.hasErrors && response.status === 200)
      yield put(commentsFetchedSuccess(response.data));
    else
      yield put(
        commentsFetchedFail({
          message: "Comments request failed",
        }),
      );
  } catch (err) {
    console.log(err, "ERROR in Saga");
  }
}

export function* commentsWatcher() {
  yield takeEvery("COMMENTS_REQUEST", sagaCommentsRequest);
}
