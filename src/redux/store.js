import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

import filmReducer from "./slices/filmSlice";
import filmListReducer from "./slices/filmListSlice";
import commentsReducer from "./slices/commentsSlice";
import ratingReducer from "./slices/ratingSlice";
import userReducer from "./slices/userSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    film: filmReducer,
    filmList: filmListReducer,
    comments: commentsReducer,
    rating: ratingReducer,
    user: userReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
