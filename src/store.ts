import { createStore, applyMiddleware } from 'redux';
import { userReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


export function configureStore(initialState = { username: 'emptyname' }) {
  const store = createStore(
    userReducer,
    initialState,
    composeWithDevTools(
      // applyMiddleware(...middleware),
      // other store enhancers if any
    ),
  );

  return store;
}

export const store = configureStore();
