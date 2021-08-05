import { call, put, takeEvery } from "redux-saga/effects";
import { axiosDefault } from "../../axios";
import {
  filmListFetchedSuccess,
  filmListFetchedFail,
} from "../slices/filmListSlice";
import { enqueueSnackbarError } from "../slices/notificationSlice";

function* sagaFilmListRequest(data) {
  try {
    const response = yield call(
      axiosDefault,
      `https://localhost:44364/api/Film`,
      "get",
    );
    if (response.status === 200) {
      yield put(filmListFetchedSuccess(response.data));
    } else {
    }
  } catch (err) {
    yield put(
      enqueueSnackbarError({
        message: "internal server error",
        key: new Date().getTime() + Math.random(),
      }),
    );
    yield put(filmListFetchedFail());
  }
}

export function* filmListWatcher() {
  //yield takeEvery("ALL_FILM_REQUEST", sagaFilmListRequest);
}
