/**
 * Gabungin semua reducers trus export combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

import { imagesReducer } from './reducers/imagesReducer';
import { detailReducer } from './reducers/detailReducer';
import { registration } from 'redux/accounts/reducers/register';
// import { moviesDetailReducer } from './reducers/movies/moviesDetailReducer';
// import { moviesReducer } from './reducers/movies/moviesReducer';
import moviesRoot from './reducers/movies';

/**
 * Merge main reducer kedalam router state biar reducer tetep singkron sama router,
 * namabahin injected reducers --> jaga2 klo mungkin bakalan dipake,
 * mungkin sejenis widget kecil yg sewaktu2 bisa pasang copot,
 * jadi widget bikin file reducer.js sendiri di dalem direktorinya.
 * trus di view widget'a tinggal injectReducer({ key: 'namawidget', reducerWidget }) --> import dari file /utils/injectReducer.js
 * tujuannya biar rootReducer tetap clean dari state yg sifatnya bukan utama/parent atau state yg bisa pasang copot
 * biar enak maintainnya
 */

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    images: imagesReducer,
    detail: detailReducer,
    movies: moviesRoot,
    registration: registration,
    ...injectedReducers,
  });

  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
