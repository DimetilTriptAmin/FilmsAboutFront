import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

import filmReducer from "./slices/filmSlice";
import commentsReducer from "./slices/commentsSlice";
import ratingReducer from "./slices/ratingSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    film: filmReducer,
    comments: commentsReducer,
    rating: ratingReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
