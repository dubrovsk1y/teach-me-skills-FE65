import { all } from "redux-saga/effects";
import authWatcher from "./authSaga";
import postsWatcher from "./postSaga";

export default function* rootSaga() {
  yield all([authWatcher(), postsWatcher()]);
}
