import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

// import AppContainer from './store/AppContainer';
import App from './App-router';
import { store } from './store/store';


ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <AppContainer /> */}
  </Provider>,
  document.getElementById("index")
);
