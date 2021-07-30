import { call, put, takeEvery } from "redux-saga/effects";
import { axiosDefault } from "../../axios";
import {
  filmListFetchedSuccess,
  filmListFetchedFail,
} from "../slices/filmListSlice";
import { enqueueSnackbarError } from "../slices/notificationSlice";

function* sagaFilmListRequest(data) {
  try {
    const errors = {};
    const response = yield call(
      axiosDefault,
      `https://localhost:44364/api/Film`,
      "get",
      errors,
    );
    if (!errors.hasErrors && response.status === 200) {
      yield put(filmListFetchedSuccess(response.data));
    } else {
      yield put(
        enqueueSnackbarError({
          message: "Films request failed: " + errors.message,
          key: new Date().getTime() + Math.random(),
        }),
      );
      yield put(filmListFetchedFail());
    }
  } catch (err) {
    console.log(err, "ERROR in Saga");
  }
}

export function* filmListWatcher() {
  yield takeEvery("ALL_FILM_REQUEST", sagaFilmListRequest);
}
