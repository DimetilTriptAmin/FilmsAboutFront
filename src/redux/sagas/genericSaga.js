import lodash from "lodash";
import { takeEvery, put } from "redux-saga/effects";

import * as callMethods from "./callMethods";
import { accessTokenSelector } from "../selectors";
import { enqueueSnackbarError } from "../slices/notificationSlice";

export function* genericWorker(action) {
  const { payload, type } = action;

  //useSlice() generates actions with types like: {sliceName}/{reducerName}
  //so we have to add a preffix {sliceName}/ to all actions
  //and remove this part on rawMethodName extracting from action.type

  const rawMethodName = type.substring(type.lastIndexOf("/") + 1);
  const methodName = lodash.camelCase(rawMethodName);

  const accessToken = accessTokenSelector();
  try {
    const response = yield callMethods[methodName](payload, accessToken);
    const successType = action.type.replace("_REQUEST", "_SUCCESS");
    yield put({ type: successType, payload: response?.data });
  } catch (err) {
    yield put(
      enqueueSnackbarError({
        message: err,
        key: new Date().getTime() + Math.random(),
      }),
    );
    const failureType = action.type.replace("_REQUEST", "_FAILURE");
    yield put({ type: failureType });
  }
}

export function* regExpRequestSagaWatcher() {
  yield takeEvery(({ type }) => /_REQUEST$/g.test(type), genericWorker);
}
