import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import authReducer from "./reducers/authReducer";
import tabsReducer from "./reducers/tabsReducer";
import userReducer from "./reducers/userReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  tabs: tabsReducer,
  post: postReducer,
  auth: authReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
