import { all, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterUser, registerUser, setAuthStatus } from "../reducers/authReducer";

function* registerUserSaga(action: PayloadAction<RegisterUser>) {
  const { payload } = action; // const data = action.payload
  console.log(payload);
  yield put(setAuthStatus(true));
  localStorage.setItem("authStatus", "true");
}

export default function* authWatcher() {
  yield all([takeLatest(registerUser, registerUserSaga)]);
}
