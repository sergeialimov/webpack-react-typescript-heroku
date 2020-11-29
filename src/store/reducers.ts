interface userReducer {

}

export const userReducer = (state: {}, action: any) => {
  switch (action.type) {
    case 'save_user':
      return { username: action.payload };
    default:
      return state;
  }
};
