import { all } from "redux-saga/effects";
import authWatcher from "./authSaga";
import postsWatcher from "./postSaga";
import userWatcher from "./userSaga";

export default function* rootSaga() {
  yield all([authWatcher(), postsWatcher(), userWatcher()]);
}
