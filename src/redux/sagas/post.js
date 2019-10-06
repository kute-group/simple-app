import { call, put, takeEvery } from 'redux-saga/effects';
import config from '../../config';
import * as actions from '../actions';
import { get } from '../services/api';

export function* fetchPost(payload) {
  const endpoint = `${config.API_URL}/wp-json/wp/v2/${payload.params.type}/${payload.params.id}`;
  const response = yield call(get, endpoint);
  const data = yield response.data;
  try {
    yield put({ type: actions.post.GET_POST_SUCCESS, post: data });
  } catch (error) {
    yield put({ type: actions.post.GET_POST_FAILED, error });
  }
}

export function* fetchPosts() {
  const endpoint = config.API_URL + '/wp-json/wp/v2/posts?_embed';
  const response = yield call(get, endpoint);
  const data = yield response.data;
  try {
    yield put({ type: actions.post.GET_POSTS_SUCCESS, posts: data });
  } catch (error) {
    yield put({ type: actions.post.GET_POSTS_FAILED, error });
  }
}

export function* fetchPostCates() {
  const endpoint = config.API_URL + '/wp-json/wp/v2/categories?_embed';
  const response = yield call(get, endpoint);
  const data = yield response.data;
  try {
    yield put({ type: actions.post.GET_POST_CATES_SUCCESS, cates: data });
  } catch (error) {
    yield put({ type: actions.post.GET_POST_CATES_FAILED, error });
  }
}

export function* loadPost() {
  yield takeEvery(actions.post.GET_POST, fetchPost);
}

export function* loadPosts() {
  yield takeEvery(actions.post.GET_POSTS, fetchPosts);
}

export function* loadPostCates() {
  yield takeEvery(actions.post.GET_POST_CATES, fetchPostCates);
}
