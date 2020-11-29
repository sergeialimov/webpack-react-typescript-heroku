export const saveUserReducer = (state: {}, action: any) => {
  switch (action.type) {
    case 'save_user':
      return action.payload;
    default:
      return state;
  }
};