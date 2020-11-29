import { createStore } from 'redux';
import { userReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
  username: ''
};


export function configureStore() {
  const store = createStore(
    userReducer as any,
    initialState,
    composeWithDevTools(
    ),
  );

  return store;
}

export const store = configureStore();
