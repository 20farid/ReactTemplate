import { fromJS } from 'immutable';
import { LOGIN } from '../constants';

export const initState = fromJS({
  loggingIn: false,
  status: false
});

const login = ( state = initState, action ) => {
  switch (action.type) {
    case LOGIN.REQUEST:
      return state
        .set('loggingIn', true);
    case LOGIN.SUCCESS:
      return state
        .set('loggingIn', false);
    case LOGIN.FAIL:
      return {};
    default:
      return state
  }
}

export { login };
