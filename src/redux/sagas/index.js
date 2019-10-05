import { all } from 'redux-saga/effects';
import {loadPost, loadPosts } from './post';

export default function* rootSaga() {
  yield all([
    loadPost(),
    loadPosts()
  ]);
}
