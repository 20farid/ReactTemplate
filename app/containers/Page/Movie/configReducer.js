import { fromJS } from 'immutable';
import { CONFIG } from 'redux/constants';
//import {initialState} from 'redux/defaultState';


export const defState = fromJS({
  loading: true,
  config: {},
});

const configReducer = (state = defState, action) => {
  switch (action.type) {
    case CONFIG.LOAD:
        return state
            .set('loading', true);
    case CONFIG.LOAD_SUCCESS:
        return state
            .set('config', action.config)
            .set('loading', false);
    default:
      return state;
  }
}

export { configReducer };
