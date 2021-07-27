import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './slices/filmSlice';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore(
    {
        reducer: {
            film: filmReducer,
        },
        middleware: [sagaMiddleware],
    },
);

sagaMiddleware.run();
