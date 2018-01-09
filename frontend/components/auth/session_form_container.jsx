// SessionFormContainer
// The SessionFormContainer should provide SessionForm with the following props:
//
// From mapStateToProps(state, ownProps):
  // loggedIn (boolean) - representing whether a currentUser exists
  // errors (array) - list of errors from the state
  // formType (string): 'login' or 'signup' given the current ownProps.location.pathname
// From mapDispatchToProps(dispatch, ownProps):
  // processForm (function): dispatching action creators login or signup given formType

import React from "react";
import {connect} from 'react-redux';
import SessionForm from './session_form';
import {logIn, newUser} from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let user;
  let formType;
  if (ownProps.location.pathname === '/signup') {

    formType = 'signup';
  } else {
    formType = 'login';
  }
  return {
    loggedIn: state.currentUser,
    errors: state.errors.session,
    formType,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;

  if (ownProps.location.pathname === '/signup') {
    processForm = newUser;
  } else {
    processForm = logIn;
  }

  return {
    processForm: (user) => dispatch(processForm(user)),
    logIn: (user) => dispatch(logIn(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
