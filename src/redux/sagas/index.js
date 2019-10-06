import { all } from 'redux-saga/effects';
import {loadPost, loadPosts, loadPostCates } from './post';

export default function* rootSaga() {
  yield all([
    loadPost(),
    loadPosts(),
    loadPostCates()
  ]);
}
