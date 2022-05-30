import { LOGIN, REGISTRATION } from "./types";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import authReducer from "./reducers/authReducer";
import tabsReducer from "./reducers/tabsReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

function tabReducer(state = { activeTab: LOGIN }, action: any) {
  if (action.type === LOGIN) {
    return { activeTab: LOGIN };
  } else if (action.type === REGISTRATION) {
    return { activeTab: REGISTRATION };
  } else return state;
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  tabReducer,
  tabs: tabsReducer,
  post: postReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
