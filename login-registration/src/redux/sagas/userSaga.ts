import { all, takeLatest, put, call } from "redux-saga/effects";
import { loadUserInfoData, setUserInfo } from "../reducers/userReducer";
import { getUserInfoApi } from "../api";
import { callCheckingAuth } from "./callCheckingAuth";

function* getUserInfoSaga(action: any) {
  const { data, status } = yield callCheckingAuth(getUserInfoApi);
  if (status === 200) {
    yield put(setUserInfo({ username: data.username, email: data.email }));
  }
}

export default function* userWatcher() {
  yield all([takeLatest(loadUserInfoData, getUserInfoSaga)]);
}
