import { fromJS } from 'immutable';
import { MOVIES } from '../../constants';

export const initState = fromJS({
  loading: true, //loading mesti true
  error: false,
  results:[],
  page: 1,
  totalPages: null,
  totalResults: null,
});


const moviesReducer = ( state = initState, action ) => {
 switch (action.type) {
    case MOVIES.LOAD:
      return state
          .set('loading', true)
          .set('error', false);
    case MOVIES.LOAD_SUCCESS:
      return state
          .set('page', action.list.page)
          .set('results', action.list.results) //nambahin di state ==> state.get('results').concat(action.list.results) / [...state.get('results'), ...action.list.results]
          .set('totalPages', action.list.total_pages)
          .set('totalResults', action.list.total_results)
          .set('loading', false);
    case MOVIES.LOAD_FAIL:
      return state
          .set('error', action.error)
          .set('loading', false)
          .set('list', null)
          .set('results', null);
    default:
      return state;
  }
}
export { moviesReducer };
