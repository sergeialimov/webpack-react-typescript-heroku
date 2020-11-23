import { createStore, combineReducers } from 'redux';
import { theReducer } from './reducers.js';

export function configureStore(initialState = { username: 'emptyname' }) {
  // console.log('-- -- -- reducers', reducers);

  const store = createStore(
    theReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
}

export const store = configureStore();
