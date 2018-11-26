import { put, call, takeEvery } from 'redux-saga/effects';

import { loadMovies, setMovies, setMoviesError } from '../../actions/movies';
import { MOVIES } from '../../constants';
import { fetchMovieList } from '../../api/movieApi';

export function* handleMoviesLoad(action){
  try {
    const list = yield call(fetchMovieList, action.page ? action.page : 1);
    yield put(setMovies(list));
  } catch (error) {
    yield put(setMoviesError(error.toString()));
  }
}

export default function* watchMoviesLoad(){
  yield takeEvery(MOVIES.LOAD, handleMoviesLoad);
}
