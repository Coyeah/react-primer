import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { BEGIN_GET_POSTS, GET_POSTS, GET_POSTS_ERROR, GET_USERS, GET_USERS_ERROR, BEGIN_GET_USERS } from '../reducers';

// worker saga
function* showPostsAsync(action) {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const response = yield call(axios.get, url);
    yield put(GET_POSTS(response.data));
  } catch (e) {
    yield put(GET_POSTS_ERROR(e));
  }
}

function* showUsersAsync(action) {
  const url = 'https://jsonplaceholder.typicode.com/users';
  try {
    const response = yield call(axios.get, url);
    yield put(GET_USERS(response.data));
  } catch (e) {
    yield put(GET_USERS_ERROR(e));
  }
}

// watcher saga
function* watchGetPosts() {
  yield takeLatest(BEGIN_GET_POSTS, showPostsAsync);
}

function* watchGetUsers() {
  yield takeLatest(BEGIN_GET_USERS, showUsersAsync);
}

// root saga
export default function* rootSaga() {
  yield [watchGetUsers(), watchGetPosts()];
}

