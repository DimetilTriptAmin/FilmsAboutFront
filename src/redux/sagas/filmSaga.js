import { call, put, takeEvery } from "redux-saga/effects";
import { axiosDefault } from "../../Axios";
import { filmFetchedSuccess, filmFetchedFail } from "../slices/filmSlice";

function* sagaFilmRequest(data) {
  try {
    const errors = {};
    const response = yield call(
      axiosDefault,
      `https://localhost:44364/api/Film/${data.payload}`,
      "get",
      errors,
    );
    if (!errors.hasErrors && response.status === 200)
      yield put(filmFetchedSuccess(response.data));
    else
      yield put(
        filmFetchedFail({
          message: "Film request failed",
        }),
      );
  } catch (err) {
    console.log(err, "ERROR in Saga");
  }
}

export function* filmWatcher() {
  yield takeEvery("FILM_REQUEST", sagaFilmRequest);
}
