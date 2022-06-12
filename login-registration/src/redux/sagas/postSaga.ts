import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, put, call } from "redux-saga/effects";
import { createPostApi, getAllPostsApi, getMyPostsApi, getSelectedPostApi } from "../api";
import {
  loadAllPostsData,
  loadMyPostsData,
  loadPostData,
  setAllPosts,
  setSelectedPost,
  setAllPostsLoading,
  setSelectedPostLoading,
  setMyPostsLoading,
  setMyPosts,
  createPost,
  setTotalAllPostsCounter,
} from "../reducers/postReducer";
import { callCheckingAuth } from "./callCheckingAuth";

function* getAllPostsSaga(action: any) {
  yield put(setAllPostsLoading(true));
  const { data, status } = yield call(getAllPostsApi, action.payload);
  if (status === 200) {
    yield put(setAllPosts(data.results));
    yield put(setTotalAllPostsCounter(data.count));
  }
  yield put(setAllPostsLoading(false));
}

function* getMyPostsSaga() {
  yield put(setMyPostsLoading(true));
  const { data, status } = yield callCheckingAuth(getMyPostsApi);
  if (status === 200) yield put(setMyPosts(data));
  yield put(setMyPostsLoading(false));
}

function* getSelectedPostSaga(action: PayloadAction<string>) {
  yield put(setSelectedPostLoading(true));
  const { data, status } = yield call(getSelectedPostApi, action.payload);
  if (status === 200) yield put(setSelectedPost(data));
  yield put(setSelectedPostLoading(false));
}

function* createPostSaga(action: any) {
  const { status } = yield callCheckingAuth(createPostApi, action.payload);
  yield console.log(status);
}

export default function* postsWatcher() {
  yield all([
    takeLatest(loadAllPostsData, getAllPostsSaga),
    takeLatest(loadMyPostsData, getMyPostsSaga),
    takeLatest(loadPostData, getSelectedPostSaga),
    takeLatest(createPost, createPostSaga),
  ]);
}
