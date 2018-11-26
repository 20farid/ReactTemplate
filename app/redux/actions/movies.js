import { MOVIES, MOVIES_DETAIL, CONFIG } from '../constants';

const loadConfig = () => ({
    type: CONFIG.LOAD,
});
const setConfig = config => ({
    type: CONFIG.LOAD_SUCCESS,
    config,
});

const loadMovies = page => ({
    type: MOVIES.LOAD,
    page,
});

const setMovies = list => ({
    type: MOVIES.LOAD_SUCCESS,
    list,
});

const setMoviesError = error => ({
    type: MOVIES.LOAD_FAIL,
    error,
});

// Detail
const loadMoviesDetail = id => ({
    type: MOVIES_DETAIL.LOAD,
    id,
});

const setMoviesDetail = detail => ({
    type: MOVIES_DETAIL.LOAD_SUCCESS,
    detail,
});

const setMoviesDetailError = error => ({
    type: MOVIES_DETAIL.LOAD_FAIL,
    error,
});

export {
  loadConfig,
  setConfig,
  loadMovies,
  loadNextMovies,
  setMovies,
  setMoviesError,
  loadMoviesDetail,
  setMoviesDetail,
  setMoviesDetailError,
};
