import { call } from '@redux-saga/core/effects';

import { axiosDefault } from '../../axios';

export function* filmListRequest() {
    return yield call(axiosDefault, `https://localhost:44364/api/Film`, 'get');
}

export function* userByIdRequest(data) {
    return yield call(
        axiosDefault,
        `https://localhost:44364/api/User/${data.payload}`,
        'get'
    );
}

export function* logInRequest(data) {
    return yield call(
        axiosDefault,
        `https://localhost:44364/api/User/login`,
        'post',
        JSON.stringify(data.payload)
    );
}

export function* registrationRequest(data) {
    return yield call(
        axiosDefault,
        `https://localhost:44364/api/User/register`,
        'post',
        JSON.stringify(data.payload)
    );
}

export function* logOutRequest() {
    return yield call(
        axiosDefault,
        `https://localhost:44364/api/User/logout`,
        'delete',
        null,
        window.localStorage.getItem('accessToken')
    );
}
