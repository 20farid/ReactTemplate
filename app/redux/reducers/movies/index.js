import { combineReducers } from 'redux-immutable';

import { moviesDetailReducer } from './moviesDetailReducer';
import { moviesReducer } from './moviesReducer';

const moviesRoot = combineReducers({
  dataDetail : moviesDetailReducer,
  dataList : moviesReducer,
});

export default moviesRoot;
