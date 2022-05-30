import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, put, call } from "redux-saga/effects";
import { getPosts, getSinglePost } from "../api";
import { loadData, setPosts, setSelectedPost, loadPost, setPostsLoading } from "../reducers/postReducer";

function* getPostsSaga() {
  // const response = yield call(getPosts)
  yield put(setPostsLoading(true));
  const { data, status } = yield call(getPosts);
  if (status === 200) yield put(setPosts(data.results));
  yield put(setPostsLoading(false));
}

function* getSinglePostSaga(action: PayloadAction<string>) {
  const { data, status } = yield call(getSinglePost, action.payload);
  if (status === 200) yield put(setSelectedPost(data));
}

export default function* postsWatcher() {
  yield all([takeLatest(loadData, getPostsSaga), takeLatest(loadPost, getSinglePostSaga)]);
}
