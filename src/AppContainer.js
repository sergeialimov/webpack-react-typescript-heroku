import { connect } from 'react-redux';

import App from './App.tsx';
import { putUserDataInStore } from './actions.ts';


const mapStateToProps = state => ({
  theReducer: state.theReducer,
});

const mapDispatchToProps = {
  putUserDataInStore,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;