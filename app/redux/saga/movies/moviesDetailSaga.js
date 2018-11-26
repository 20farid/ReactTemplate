import { put, call, takeEvery } from 'redux-saga/effects';

import { loadMoviesDetail, setMoviesDetail, setMoviesDetailError } from '../../actions/movies';
import { MOVIES_DETAIL } from '../../constants';
import { fetchMovieDetail } from '../../api/movieApi';

export function* handlemoviesDetailRequest(action) {
  try {
    const detail = yield call(fetchMovieDetail, action.id);
    yield put(setMoviesDetail(detail));
  } catch (error) {
    yield put(setMoviesDetailError(error.toString()));
  }
}

export default function* watchmoviesDetailRequest(){
  yield takeEvery(MOVIES_DETAIL.LOAD, handlemoviesDetailRequest)
}
