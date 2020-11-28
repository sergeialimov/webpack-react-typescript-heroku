export const saveUserReducer = (action: any, state: {}) => {
  switch (action.type) {
    case 'save_user':
      return action.userData;
    default:
      return state;
  }
};