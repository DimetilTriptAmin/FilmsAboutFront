import { call, put, takeEvery } from 'redux-saga/effects';

import { axiosDefault } from '../../axios';
import { enqueueSnackbarError } from '../slices/notificationSlice';
import { userFetchedSuccess } from '../slices/userSlice';

function* userByIdRequest(data) {
    try {
        const errors = {};
        const response = yield call(
            axiosDefault,
            `https://localhost:44364/api/User/${data.payload}`,
            'get',
            errors
        );
        if (!errors.hasErrors && response.status === 200) {
            yield put(
                userFetchedSuccess({
                    response: response.data,
                    userId: data.payload,
                })
            );
        } else yield put();
    } catch (err) {
        console.log(err, 'ERROR in Saga');
    }
}

function* loginRequest(data) {
    try {
        const errors = {};
        const response = yield call(
            axiosDefault,
            `https://localhost:44364/api/User/login`,
            'post',
            null, // refactor
            JSON.stringify(data.payload)
        );
        console.log(response);
        if (response.data.isSucceeded && response.status === 200) {
            yield put(
                userFetchedSuccess({
                    response: response.data,
                    userId: data.payload,
                })
            );
        } else
            yield put(
                enqueueSnackbarError({
                    message: response.data.message,
                    key: new Date().getTime() + Math.random(),
                })
            );
    } catch (err) {
      yield put(
        enqueueSnackbarError({
            message: "internal server error",
            key: new Date().getTime() + Math.random(),
        })
    );
    }
}

export function* userWatcher() {
    yield takeEvery('USER_REQUEST', userByIdRequest);
    yield takeEvery('LOGIN_REQUEST', loginRequest);
}
