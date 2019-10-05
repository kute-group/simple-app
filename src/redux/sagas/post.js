import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import { get } from '../services/api';

export function* fetchPost(payload) {
  const endpoint = 'https://thietkeweb5ngay.com/wp-json/wp/v2/posts/' + payload.id;
  const response = yield call(get, endpoint);
  const data = yield response.data;
  try {
    yield put({ type: actions.post.GET_POST_SUCCESS, post: data });
  } catch (error) {
    yield put({ type: actions.post.GET_POST_FAILED, error });
  }
}

export function* fetchPosts() {
  console.log(1);
  const endpoint = 'https://thietkeweb5ngay.com/wp-json/wp/v2/posts';
  const response = yield call(get, endpoint);
  const data = yield response.data;
  try {
    console.log('data', data);
    yield put({ type: actions.post.GET_POSTS_SUCCESS, posts: data });
  } catch (error) {
    yield put({ type: actions.post.GET_POSTS_FAILED, error });
  }
}

export function* loadPost() {
  yield takeEvery(actions.post.GET_POST, fetchPost);
}

export function* loadPosts() {
  yield takeEvery(actions.post.GET_POSTS, fetchPosts);
}
