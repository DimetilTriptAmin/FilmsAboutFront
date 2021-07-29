import { call, put, takeEvery } from "redux-saga/effects";
import { axiosDefault } from "../../axios";
import {
  filmListFetchedSuccess,
  filmListFetchedFail,
} from "../slices/filmListSlice";

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
    } else
      yield put(
        filmListFetchedFail({
          message: "Film list request failed",
        }),
      );
  } catch (err) {
    console.log(err, "ERROR in Saga");
  }
}

export function* filmListWatcher() {
  yield takeEvery("ALL_FILM_REQUEST", sagaFilmListRequest);
}
