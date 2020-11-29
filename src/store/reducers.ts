import { Action } from '../types';


export const userReducer = (state: {}, action: Action) => {
  switch (action.type) {
    case 'save_user':
      return { username: action.payload };
    default:
      return state;
  }
};
