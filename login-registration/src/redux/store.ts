import { LOGIN, REGISTRATION } from "./types";
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import postReducer from "./reducers/postReducer";
import authReducer from "./reducers/authReducer";

function tabReducer(state = { activeTab: LOGIN }, action: any) {
    if (action.type === LOGIN) {
        return { activeTab: LOGIN }
    } else if (action.type === REGISTRATION) {
        return { activeTab: REGISTRATION }
    } else return state
}

const rootReducer = combineReducers({
    tabReducer,
    post: postReducer,
    auth: authReducer,
})
  
export const store = configureStore({
    reducer: rootReducer
});