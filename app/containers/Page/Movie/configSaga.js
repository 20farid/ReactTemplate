import { put, call, takeEvery } from 'redux-saga/effects';

import { loadConfig, setConfig } from 'redux/actions/movies';
import { CONFIG } from 'redux/constants';
import { fetchMovieConfig } from 'redux/api/movieApi';

export function* handleConfigLoad() {
  try {
    const config = yield call(fetchMovieConfig);
    yield put(setConfig(config));
  } catch (error){}
}

export default function* watchConfigLoad() {
  yield takeEvery(CONFIG.LOAD, handleConfigLoad);
}
