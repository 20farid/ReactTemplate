import { put, call, takeEvery, select } from 'redux-saga/effects';

import { loadImages , setImages, setError } from '../actions';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';

//export const getPage = state => state.get('nextPage');


export function* handleImagesLoad(action) {
    try {
        //const page = yield select(getPage);
        console.log('pager', action.page);
        const images = yield call(fetchImages, action.page ? action.page : 1);
        if(images.length <= 0){
          yield put(loadImages(action.page + 1));
        }
        yield put(setImages(images));

        //yield put(push(`/page=${page}`));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
