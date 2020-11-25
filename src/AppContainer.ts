import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import App from './App';
import { putUserDataInStore } from './actions';


const mapStateToProps = (state: any) => ({
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
