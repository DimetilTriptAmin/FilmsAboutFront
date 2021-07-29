import { call, put, takeEvery } from "redux-saga/effects";

import { axiosDefault } from "../../Axios";
import { ratingByPairIdFetchedSuccess } from "../slices/ratingSlice";

function* ratingRequest(data) {
  try {
    const errors = {};
    const response = yield call(
      axiosDefault,
      `https://localhost:44364/api/Rating/getByPair?filmId=${data.payload.filmId}&userId=${data.payload.userId}`,
      "get",
      errors,
    );
    if (!errors.hasErrors && response.status === 200) {
      yield put(
        ratingByPairIdFetchedSuccess({
          response: response.data,
          userId: data.payload.userId,
        }),
      );
    } else yield put();
  } catch (err) {
    console.log(err, "ERROR in Saga");
  }
}

export function* ratingWatcher() {
  yield takeEvery("RATING_BY_PAIR_ID_REQUEST", ratingRequest);
}
