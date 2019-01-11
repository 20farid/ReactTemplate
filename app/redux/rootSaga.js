import { all } from 'redux-saga/effects';

import imagesSaga from './saga/imagesSaga';
import detailSaga from './saga/detailSaga';
import register from 'redux/accounts/saga/register';
import login from 'redux/accounts/saga/login';

import moviesDetailSaga from './saga/movies/moviesDetailSaga';
import moviesSaga from './saga/movies/moviesSaga';

export default function* rootSaga() {
    yield all([
      imagesSaga(),
      moviesDetailSaga(),
      moviesSaga(),
      register(),
      login()
    ]);
}
