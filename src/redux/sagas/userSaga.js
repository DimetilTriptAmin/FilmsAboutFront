import { call, put, takeEvery } from "redux-saga/effects";

import { axiosDefault } from "../../axios";
import { enqueueSnackbarError } from "../slices/notificationSlice";
import { userFetchedSuccess } from "../slices/userSlice";

function* userByIdRequest(data) {
  try {
    const response = yield call(
      axiosDefault,
      `https://localhost:44364/api/User/${data.payload}`,
      "get",
    );
    if (response.status === 200) {
      yield put(
        userFetchedSuccess({
          response: response.data,
          userId: data.payload,
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

function* loginRequest(data) {
  try {
    const response = yield call(
      axiosDefault,
      `https://localhost:44364/api/User/login`,
      "post",
      JSON.stringify(data.payload),
    );
    if (response.data.isSucceeded && response.status === 200) {
      yield window.localStorage.setItem(
        "accessToken",
        response.data.value.jwtToken,
      );
      yield window.localStorage.setItem(
        "username",
        response.data.value.username,
      );
    } else
      yield put(
        enqueueSnackbarError({
          message: response.data.message,
          key: new Date().getTime() + Math.random(),
        }),
      );
  } catch (err) {
    console.log(err);
    yield put(
      enqueueSnackbarError({
        message: err.message,
        key: new Date().getTime() + Math.random(),
      }),
    );
  }
}

export function* userWatcher() {
  yield takeEvery("USER_REQUEST", userByIdRequest);
  yield takeEvery("LOGIN_REQUEST", loginRequest);
}
