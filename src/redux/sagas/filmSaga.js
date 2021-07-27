import { put, call, takeEvery } from 'redux-saga/effects';
import { filmFetched } from '../slices/filmSlice';

// todo add axios
const fetchFilms = () => fetch('https://localhost:44364/api/Film/3');

function* filmWorker() {
    const data = yield call(fetchFilms);
    const json = yield call(() => new Promise((res) => res(data.json())));
    console.log(json);
    yield put(filmFetched(json));
}

export function* filmWatcher() {
    yield takeEvery('FILM_REQUEST', filmWorker);
}
