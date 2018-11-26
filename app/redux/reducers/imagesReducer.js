import { IMAGES, STATS } from '../constants';
import {initialState} from '../defaultState';



const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return state
          .set('loading', true)
          .set('error', false)
          .set('page', action.page)
          .setIn('hasMore', true);
    case IMAGES.LOAD_SUCCESS:
      return state
          .setIn(['data'], state.getIn(['data']).concat(action.data)) //nambahin di state ==> state.getIn(['images']).concat(action.images)
          .set('loading', false)
          .setIn('hasMore', action.hasMore);
    case IMAGES.LOAD_FAIL:
      return state
          .set('error', action.error)
          .set('loading', false)
          .setIn(['data'], null)
          .setIn('hasMore', false);
    default:
      return state;
  }
}


// const pageReducer = (state = 1, action) => {
//     switch (action.type) {
//         case IMAGES.PAGE:
//             return state ;
//
//         default:
//             return state;
//     }
// };



export {imagesReducer};
