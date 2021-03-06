import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

import userReducer from "./slices/userSlice";
import filmReducer from "./slices/filmSlice";
import filmListReducer from "./slices/filmListSlice";
import commentListReducer from "./slices/commentListSlice";
import notificationReducer from "./slices/notificationSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    film: filmReducer,
    filmList: filmListReducer,
    commentList: commentListReducer,
    user: userReducer,
    notification: notificationReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
