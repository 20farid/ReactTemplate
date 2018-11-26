
import { createSelector } from 'reselect';

const selectImages = state => state.get('images'); // liat app/reducers.js rootReducer
const selectRouter = state => state.get('router');
const selectDetail = state => state.get('detail');


const makeSelecthasMore = () =>
  createSelector(selectImages, imagesState => imagesState.get('hasMore'));
const makeSelectPage = () =>
  createSelector(selectImages, imagesState => imagesState.get('page'));
const makeSelectImages = () =>
  createSelector(selectImages, imagesState => imagesState.get('data'));
const makeSelectImagesLoading = () =>
  createSelector(selectImages, imagesState => imagesState.get('loading'));
const makeSelectImagesError = () =>
  createSelector(selectImages, imagesState => imagesState.get('error'));

const makeSelectDetail = () =>
  createSelector(selectDetail, detailState => detailState.get('detail'));
const makeSelectDetailLoading = () =>
  createSelector(selectDetail, detailState => detailState.get('loading'));
const makeSelectDetailError = () =>
  createSelector(selectDetail, detailState => detailState.get('error'));


export {
  selectImages,
  makeSelectImages,
  makeSelectImagesLoading,
  makeSelectImagesError,
  makeSelectPage,
  makeSelecthasMore,
}
