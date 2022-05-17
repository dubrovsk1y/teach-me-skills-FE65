import { legacy_createStore as createStore, combineReducers, compose } from "redux";
import { LOGIN, REGISTRATION } from "./types";
  
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
function rootReducer(state = { activeTab: LOGIN }, action: any) {
    if (action.type === LOGIN) {
        return { activeTab: LOGIN }
    } else if (action.type === REGISTRATION) {
        return { activeTab: REGISTRATION }
    } else return state
}
  
export const store = createStore(rootReducer);