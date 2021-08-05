import { call, put, takeEvery } from 'redux-saga/effects';

import { axiosDefault } from '../../axios';
import { enqueueSnackbarError } from '../slices/notificationSlice';
import { userFetchedSuccess } from '../slices/userSlice';

function* userByIdRequest(data) {
    try {
        const response = yield call(
            axiosDefault,
            `https://localhost:44364/api/User/${data.payload}`,
            'get'
        );
        if (response.status === 200) {
            yield put(
                userFetchedSuccess({
                    response: response.data,
                    userId: data.payload,
                })
            );
        } else yield put();
    } catch (err) {
        yield put(
            enqueueSnackbarError({
                message: 'internal server error',
                key: new Date().getTime() + Math.random(),
            })
        );
    }
}

function* logInRequest(data) {
    try {
        const response = yield call(
            axiosDefault,
            `https://localhost:44364/api/User/login`,
            'post',
            JSON.stringify(data.payload)
        );
        if (response.status === 200) {
            yield window.localStorage.setItem(
                'accessToken',
                response.data.accessToken
            );
            //window.location.reload(); // remove on refactoring
        } else {
            yield put(
                enqueueSnackbarError({
                    message: response,
                    key: new Date().getTime() + Math.random(),
                })
            );
        }
    } catch (err) {
        yield put(
            enqueueSnackbarError({
                message: err,
                key: new Date().getTime() + Math.random(),
            })
        );
    }
}

function* registrationRequest(data) {
    try {
        const response = yield call(
            axiosDefault,
            `https://localhost:44364/api/User/register`,
            'post',
            JSON.stringify(data.payload)
        );
        if (response.status === 200) {
            yield window.localStorage.setItem(
                'accessToken',
                response.data.accessToken
            );
            window.location.reload(); // remove on refactoring
        } else {
            yield put(
                enqueueSnackbarError({
                    message: response,
                    key: new Date().getTime() + Math.random(),
                })
            );
        }
    } catch (err) {
        yield put(
            enqueueSnackbarError({
                message: err,
                key: new Date().getTime() + Math.random(),
            })
        );
    }
}

function* logOutRequest() {
  console.log('1. I am in saga');
    try {
      console.log('2. in try');
      console.log(window.localStorage.getItem('accessToken'));
        const response = yield call(
            axiosDefault,
            `https://localhost:44364/api/User/logout`,
            'delete',
            null,
            window.localStorage.getItem('accessToken')
        );
        if (response.status === 200) {
          console.log('3. if status 200 == true');
            yield window.localStorage.clear();
            //window.location.reload(); // remove on refactoring
        } else {
          console.log('4. else => status not 200: ' + response);
            yield put(
                enqueueSnackbarError({
                    message: response,
                    key: new Date().getTime() + Math.random(),
                })
            );
        } 
    } catch (err) {
      console.log('5. error catched');
        yield put(
            enqueueSnackbarError({
                message: err,
                key: new Date().getTime() + Math.random(),
            })
        );
    }
}

export function* userWatcher() {
    yield takeEvery('USER_REQUEST', userByIdRequest);
    yield takeEvery('LOG_IN_REQUEST', logInRequest);
    yield takeEvery('LOG_OUT_REQUEST', logOutRequest);
    yield takeEvery('REGISTRATION_REQUEST', registrationRequest);
}
