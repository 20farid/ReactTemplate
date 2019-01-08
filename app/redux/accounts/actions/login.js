import { LOGIN } from 'redux/accounts/constants';

const requestLogin = user => ({
  type: LOGIN.REQUEST,
  user
});

const successLogin = status => ({
  type: LOGIN.SUCCESS,
  status
});

const failLogin = error => ({
  type: LOGIN.FAIL,
  error
});

export {
  requestLogin,
  successLogin,
  failLogin
}
