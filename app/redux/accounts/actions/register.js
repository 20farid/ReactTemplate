import { REGISTER } from 'redux/accounts/constants';

const requestRegister = user => ({
  type: REGISTER.REQUEST,
  user
});

const successRegister = status => ({
  type: REGISTER.SUCCESS,
  status
});

const failRegister = error => ({
  type: REGISTER.FAIL,
  error
});

export {
  requestRegister,
  successRegister,
  failRegister
}
