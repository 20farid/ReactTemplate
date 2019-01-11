import { put, call, takeEvery } from 'redux-saga/effects';

import { successLogin, failLogin } from 'redux/accounts/actions/login';
import { LOGIN } from 'redux/accounts/constants';
import { postLogin } from 'redux/accounts/api';

export function* handleLogin(action){
  try{
    const status = yield call(postLogin, action.user);
    yield put(successLogin(status));
  } catch (err) {
    yield put(failLogin(err));
  }
}

export default function* watchLogin(){
  yield takeEvery(LOGIN.REQUEST, handleLogin);
}
