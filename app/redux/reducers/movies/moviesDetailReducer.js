import { fromJS } from 'immutable';
import { MOVIES_DETAIL } from '../../constants';

export const initState = fromJS({
  loading: false,
  error: false,
  detail: false,
});

const moviesDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case MOVIES_DETAIL.LOAD:
      return state
          .set('loading', true)
          .set('error', false)
          .setIn(['detail'], false);
    case MOVIES_DETAIL.LOAD_SUCCESS:
      return state
          .setIn(['detail'], action.detail)
          .set('loading', false);
    case MOVIES_DETAIL.LOAD_FAIL:
      return state
          .set('error', action.error)
          .set('loading', false)
          setIn(['detail'], null);
    default:
      return state;
  }
}

export { moviesDetailReducer };
