import { DETAIL } from '../constants';
import {initialState} from '../defaultState';


const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL.LOAD:
      return state
          .set('loading', true)
          .set('error', false)
          .setIn(['detail'], false);
    case DETAIL.LOAD_SUCCESS:
      return state
          .setIn(['detail'], action.detail)
          .set('loading', false);
    case DETAIL.LOAD_FAIL:
      return state
          .set('error', action.error)
          .set('loading', false)
          setIn(['detail'], null);
    default:
      return state;
  }
}

export {detailReducer};
