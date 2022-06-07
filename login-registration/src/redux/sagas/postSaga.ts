import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, put, call } from "redux-saga/effects";
import { getPostsApi, getSelectedPostApi } from "../api";
import {
  loadData,
  loadPost,
  setPosts,
  setSelectedPost,
  setPostsLoading,
  setSelectedPostLoading,
} from "../reducers/postReducer";

function* getPostsSaga() {
  yield put(setPostsLoading(true));
  const { data, status } = yield call(getPostsApi);
  if (status === 200) yield put(setPosts(data.results));
  yield put(setPostsLoading(false));
}

function* getSelectedPostSaga(action: PayloadAction<string>) {
  yield put(setSelectedPostLoading(true));
  const { data, status } = yield call(getSelectedPostApi, action.payload);
  if (status === 200) yield put(setSelectedPost(data));
  yield put(setSelectedPostLoading(false));
}

export default function* postsWatcher() {
  yield all([takeLatest(loadData, getPostsSaga), takeLatest(loadPost, getSelectedPostSaga)]);
}
