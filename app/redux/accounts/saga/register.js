import { put, call, takeEvery } from 'redux-saga/effects';

import { successRegister,failRegister } from 'redux/accounts/actions/register';
import { REGISTER } from 'redux/accounts/constants';
import { postSignup } from 'redux/accounts/api';

export function* handleRegister(action){
  try{
    const status = yield call(postSignup, action.user);
    yield put(successRegister(status));
  } catch (err) {
    yield put(failRegister(err));
  }
}

export default function* watchRegister(){
  yield takeEvery(REGISTER.REQUEST, handleRegister);
}
