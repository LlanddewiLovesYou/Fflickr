
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as SessionApi from '../util/session_api_util';

export const logIn = (user) => {
  return (dispatch) => {
    return SessionApi.login(user).then((user) => {
      dispatch({type: RECEIVE_CURRENT_USER, user});
    });
  };
};

export const logOut = (user) => {
  return (dispatch) => {
    return SessionApi.logout().then((user) => {
      dispatch({type: RECEIVE_CURRENT_USER, user: {username: null, password: null}});
    }, (errors) => {
      dispatch({type: RECEIVE_ERRORS, errors: errors.responseJSON});
    });
  };
};


export const newUser = (user) => {
  return (dispatch) => {
    return SessionApi.newUser(user).then((user) => {
      dispatch({type: RECEIVE_CURRENT_USER, user});
    }, (errors) => {
      dispatch({type: RECEIVE_ERRORS, errors: errors.responseJSON});
    });
  };
};
