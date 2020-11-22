import { combineReducers } from 'redux';

export const theReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PUT_USER_DATA':
      return action.userData;
    default:
      return state;
  }
};


export const createReducers = () => {
  console.log('-- -- -- theReducer', theReducer);

  return combineReducers({
    theReducer,
  });
};