interface userReducer {

}

export const userReducer = (state: {}, action: any) => {
  switch (action.type) {
    case 'save_user':
      return action.payload;
    default:
      return state;
  }
};
