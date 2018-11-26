import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import detailSaga from './detailSaga';

import moviesDetailSaga from './movies/moviesDetailSaga';
import moviesSaga from './movies/moviesSaga';

export default function* rootSaga() {
    yield all([imagesSaga(), moviesDetailSaga(), moviesSaga()]);
}
