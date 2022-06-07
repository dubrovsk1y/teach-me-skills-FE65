import { all, takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  registerUser,
  activateUser,
  loginUser,
  setAuthStatus,
  setTempMail,
  setRegisterUserLoading,
  RegisterUser,
  LoginUser,
  setActivateUserLoading,
  setLoginUserLoading,
} from "../reducers/authReducer";
import { loginUserApi, registerUserApi, activateUserApi } from "../api";

function* registerUserSaga(action: PayloadAction<RegisterUser>) {
  yield put(setRegisterUserLoading(true));
  const { email, username, password } = action.payload;
  const { data, status } = yield call(registerUserApi, {
    email,
    username,
    password,
  });
  if (status === 201) yield put(setTempMail(data?.email));
  yield put(setRegisterUserLoading(false));
  alert("Check your email");
}

function* activateUserSaga(action: any) {
  yield put(setActivateUserLoading(true));
  const { uuid, token, callback } = action.payload;
  const { status } = yield call(activateUserApi, uuid, token);
  if (status === 204) callback();
  yield put(setActivateUserLoading(false));
}

function* loginUserSaga(action: PayloadAction<LoginUser>) {
  yield put(setLoginUserLoading(true));
  const userData = action.payload;
  const { status, data, problem } = yield call(loginUserApi, userData);
  if (status === 200) {
    localStorage.setItem("jwtAccessToken", data.access);
    localStorage.setItem("jwtRefreshToken", data.refresh);
    yield put(setAuthStatus(true));
  } else {
    console.error("ОШИБКА ПРИ ЛОГИНЕ", problem);
  }
  yield put(setLoginUserLoading(false));
}

export default function* authWatcher() {
  yield all([
    takeLatest(registerUser, registerUserSaga),
    takeLatest(activateUser, activateUserSaga),
    takeLatest(loginUser, loginUserSaga),
  ]);
}
