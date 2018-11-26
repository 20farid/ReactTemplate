import { createSelector } from 'reselect';

const selectMovies = state => state.get('movies');
const selectConfig = state => state.get('config');


const makeSelectResults = () =>
    createSelector(selectMovies, resultsState => resultsState.getIn(['dataList', 'results']));
const makeSelectTotalPages = () =>
    createSelector(selectMovies, resultsState => resultsState.getIn(['dataList', 'totalPages']));
const makeSelectTotalResults = () =>
    createSelector(selectMovies, resultsState => resultsState.getIn(['dataList', 'totalResults']));
const makeSelectMoviesLoading = () =>
    createSelector(selectMovies, resultsState => resultsState.getIn(['dataList', 'loading']));
const makeSelectMoviesError = () =>
    createSelector(selectMovies, resultsState => resultsState.getIn(['dataList', 'error']));


const makeSelectConfig = () =>
   createSelector(selectConfig, resultsState => resultsState.get('config'));


export {
  makeSelectMoviesLoading,
  makeSelectMoviesError,
  makeSelectConfig,
  makeSelectResults,
  makeSelectTotalPages,
  makeSelectTotalResults,
}
