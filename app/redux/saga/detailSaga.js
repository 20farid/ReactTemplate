import { take, call, takeEvery, put } from 'redux-saga/effects';

import { loadDetail, setDetail, setDetailError } from '../actions';
import { DETAIL } from '../constants';
import { fetchDetailImages } from '../api';

export function* handleDetailRequest(action) {
  try {
      const detail = yield call(fetchDetailImages, action.id);
      yield put(setDetail(detail));

  } catch (error) {
      yield put(setDetailError(error.toString()));
  }
}

export default function* watchDetailRequest(){
    yield takeEvery(DETAIL.LOAD, handleDetailRequest)
}
