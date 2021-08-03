import { call, put, takeEvery } from "redux-saga/effects";

import { axiosDefault } from "../../axios";
import { filmFetchedSuccess, filmFetchedFail } from "../slices/filmSlice";
import { enqueueSnackbarError } from "../slices/notificationSlice";

function* sagaFilmRequest(data) {
  try {
    const response = yield call(
      axiosDefault,
      `https://localhost:44364/api/Film/${data.payload}`,
      "get",
    );
    if (response.status === 200) yield put(filmFetchedSuccess(response.data));
    else {
    }
  } catch (err) {
    yield put(
      enqueueSnackbarError({
        message: "internal server error",
        key: new Date().getTime() + Math.random(),
      }),
    );
    yield put(filmFetchedFail());
  }
}

export function* filmWatcher() {
  yield takeEvery("FILM_REQUEST", sagaFilmRequest);
}
