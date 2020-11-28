import { connect } from 'react-redux';

import { NewUserForm } from './New-user-form';
import { saveUser } from './actions';


const mapStateToProps = (state: any) => ({
  theReducer: state.theReducer,
});

const mapDispatchToProps = {
  saveUser,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserForm);

export default AppContainer;
