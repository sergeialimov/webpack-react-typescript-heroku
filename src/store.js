import { createStore, combineReducers } from 'redux';
// import theReducer from './reducers.js';
import createReducers from './reducers.js';


const theReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PUT_USER_DATA':
      return action.userData;
    default:
      return state;
  }
};

export function configureStore(initialState = {}) {
  // console.log('-- -- -- reducers', reducers);

  const store = createStore(
    theReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  console.log('-- -- -- store0', store);

  return store;
}

export const store = configureStore();