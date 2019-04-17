import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import axios from 'axios';

// worker saga
function* fetchDataAsync(action) {
  const url = 'https://www.coyeah.top/api';
  try {
    // const response = yield call(Api.fetchUser, action.payload.url);
    const response = yield call(axios.get, url);
    yield put({type: "FETCH_SUCCEEDED", data});
  } catch (e) {
    yield put({type: "FETCH_FAILED", error});
  }
}

// watcher saga
function* watchFetchDataAsync() {
  yield takeEvery('FETCH_REQUESTED', fetchDataAsync);
}

// root saga
export default function* rootSaga() {
  /**
   * If need multiple saga.
   * yield [...function];
   */
  yield watchFetchDataAsync();
}
