import { call, put, takeEvery } from "redux-saga/effects";

import { axiosDefault } from "../../axios";
import { ratingByPairIdFetchedSuccess } from "../slices/ratingSlice";
import { enqueueSnackbarError } from "../slices/notificationSlice";

function* ratingRequest(data) {
  try {
    const response = yield call(
      axiosDefault,
      `https://localhost:44364/api/Rating/getByPair?filmId=${data.payload.filmId}&userId=${data.payload.userId}`,
      "get",
    );
    if (response.status === 200) {
      yield put(
        ratingByPairIdFetchedSuccess({
          response: response.data,
          userId: data.payload.userId,
        }),
      );
    } else yield put();
  } catch (err) {
    yield put(
      enqueueSnackbarError({
        message: "internal server error",
        key: new Date().getTime() + Math.random(),
      }),
    );
  }
}

export function* ratingWatcher() {
  yield takeEvery("RATING_BY_PAIR_ID_REQUEST", ratingRequest);
}
