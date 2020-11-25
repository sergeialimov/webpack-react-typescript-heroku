import { combineReducers } from 'redux';

export const userReducer = (action: any, state: {}) => {
  switch (action.type) {
    case 'PUT_USER_DATA':
      return action.userData;
    default:
      return state;
  }
};

// export const createReducers = () => {
//   return combineReducers({
//     userReducer,
//   });
// };
