
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
    return SessionApi.logOut().then((user) => {
      dispatch({type: RECEIVE_CURRENT_USER, user});
    });
  };
};


export const newUser = (user) => {
  return (dispatch) => {
    return SessionApi.newUser(user).then((user) => {
      dispatch({type: RECEIVE_CURRENT_USER, user});
    });
  };
};

// export const signup = user => dispatch => (
//   APIUtil.signup(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );
//
// export const login = user => dispatch => (
//   APIUtil.login(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );


// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser) (regular action creator)
// receiveErrors(errors) (regular action creator)
