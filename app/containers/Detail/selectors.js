
import { createSelector } from 'reselect';

const selectDetail = state => state.get('detail');// liat app/reducers.js rootReducer

const makeSelectDetail = () =>
  createSelector(selectDetail, detailState => detailState.get('detail'));
const makeSelectDetailLoading = () =>
  createSelector(selectDetail, detailState => detailState.get('loading'));
const makeSelectDetailError = () =>
  createSelector(selectDetail, detailState => detailState.get('error'));



export {
  makeSelectDetail,
  makeSelectDetailLoading,
  makeSelectDetailError,
}
