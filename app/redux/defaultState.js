import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: false,
  page: 0,
  hasMore: true,
  data: [],
  detail: false,
  config: {},
});

export {initialState}
