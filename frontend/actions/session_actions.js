
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

export const logout = () => {
  return (dispatch) => {
    return SessionApi.logout().then(() => {
      dispatch({type: RECEIVE_CURRENT_USER, user: null});
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
// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser) (regular action creator)
// receiveErrors(errors) (regular action creator)
