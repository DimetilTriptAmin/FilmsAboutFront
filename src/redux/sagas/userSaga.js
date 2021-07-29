import { call, put, takeEvery } from "redux-saga/effects";

import { axiosDefault } from "../../axios";
import { userFetchedSuccess } from "../slices/userSlice";

function* userByIdRequest(data) {
  try {
    const errors = {};
    const response = yield call(
      axiosDefault,
      `https://localhost:44364/api/User/${data.payload}`,
      "get",
      errors,
    );
    if (!errors.hasErrors && response.status === 200) {
      yield put(
        userFetchedSuccess({ response: response.data, userId: data.payload }),
      );
    } else yield put();
  } catch (err) {
    console.log(err, "ERROR in Saga");
  }
}

export function* userWatcher() {
  yield takeEvery("USER_REQUEST", userByIdRequest);
}
