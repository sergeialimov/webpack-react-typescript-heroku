import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import AppContainer from './AppContainer.js';
import { store } from './store.js';


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("index")
);
