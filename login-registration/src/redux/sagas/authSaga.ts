import { all, takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterUser, registerUser, setTempMail, userActivate } from "../reducers/authReducer";
import { registerUser as registerUserApi, userActivate as userActivateApi } from "../api";

function* registerUserSaga(action: PayloadAction<RegisterUser>) {
  const { email, name, password } = action.payload;

  const { data, status } = yield call(registerUserApi, {
    email,
    username: name,
    password,
  });

  if (status === 201) {
    console.log(data);
    yield put(setTempMail(data?.email));
  }
}

function* userActivateSaga(action: any) {
  const { uuid, token } = action.payload;
  const { status, data } = yield call(userActivateApi, uuid, token);
  if (status === 204) {
    console.log(status);
    console.log(data);
  }
}

export default function* authWatcher() {
  yield all([takeLatest(registerUser, registerUserSaga), takeLatest(userActivate, userActivateSaga)]);
}
