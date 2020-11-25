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

// const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => ({
//   handleClick: () => dispatch(putUserDataInStore())
//   // handleClick: () => dispatch(incrementCounterAction())
// });

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;


// function mapDispatchToProps(dispatch: Redux.Dispatch<any>, ownProps: OwnProps): DispatchProps {
//   ...
// }

// function mapDispatchToProps(dispatch: Dispatch<any>) {
//   return dispatch(putUserDataInStore);
//   // return dispatch({ type: 'ALERT_USER' });
// }
