import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, put, call } from "redux-saga/effects";
import { getPosts, getSelectedPost } from "../api";
import {
  loadData,
  setPosts,
  setSelectedPost,
  loadPost,
  setPostsLoading,
  setSelectedPostLoading,
} from "../reducers/postReducer";

function* getPostsSaga() {
  // const response = yield call(getPosts)
  yield put(setPostsLoading(true));
  const { data, status } = yield call(getPosts);
  if (status === 200) yield put(setPosts(data.results));
  yield put(setPostsLoading(false));
}

function* getSelectedPostSaga(action: PayloadAction<string>) {
  yield put(setSelectedPostLoading(true));
  const { data, status } = yield call(getSelectedPost, action.payload);
  if (status === 200) yield put(setSelectedPost(data));
  yield put(setSelectedPostLoading(false));
}

export default function* postsWatcher() {
  yield all([takeLatest(loadData, getPostsSaga), takeLatest(loadPost, getSelectedPostSaga)]);
}
