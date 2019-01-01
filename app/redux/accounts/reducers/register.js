import { fromJS } from 'immutable';
import { REGISTER } from '../constants';

export const initState = fromJS({
  registering: false,
  status:false
});

const registration = ( state = initState, action ) => {
  switch (action.type) {
    case REGISTER.REQUEST:
      return state
        .set('registering', true);
    case REGISTER.SUCCESS:
      return state
        .set('status', action.status)
        .set('registering', false);
    case REGISTER.FAIL:
      return {};
    default:
      return state
  }
}
export { registration };
