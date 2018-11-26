import { IMAGES, DETAIL } from '../constants';

const loadImages = (page) => ({
    type: IMAGES.LOAD,
    page: page + 1,
});

const setImages = data => ({
    type: IMAGES.LOAD_SUCCESS,
    data,
    hasMore: data.length > 0,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

const nextPage = page => ({
    type: IMAGES.PAGE,
    page,
});


//detail
const loadDetail = id => ({
    type: DETAIL.LOAD,
    id,
});

const setDetail = detail => ({
    type: DETAIL.LOAD_SUCCESS,
    detail,
});

const setDetailError = error => ({
    type: DETAIL.LOAD_FAIL,
    error,
});

export {
  loadImages,
  setImages,
  setError,

  loadDetail,
  setDetail,
  setDetailError,
};
