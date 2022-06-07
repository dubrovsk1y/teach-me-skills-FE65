import { all, takeLatest, put, call } from "redux-saga/effects";
import { loadUserInfoData, setUserInfo } from "../reducers/userReducer";
import { getUserInfoApi } from "../api";

function* getUserInfoSaga(action: any) {
  const accessToken = localStorage.getItem("jwtAccessToken");
  const { data, status } = yield call(getUserInfoApi, accessToken);
  if (status === 200) yield put(setUserInfo({ username: data.username, email: data.email }));
}

export default function* userWatcher() {
  yield all([takeLatest(loadUserInfoData, getUserInfoSaga)]);
}
