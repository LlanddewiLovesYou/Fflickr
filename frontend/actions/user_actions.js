export const RECEIVE_USER = 'RECEIVE_USER';
import * as UserApi from '../util/user_api_util';


export const receiveUser = (id) => {
  return (dispatch) => {
    return UserApi.fetchUser(id).then((payload) => {
      dispatch({type: RECEIVE_USER, user: payload.user, albums: payload.albums, photos: payload.photos});
    });
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    return UserApi.updateUser(user).then((payload) => {
      dispatch({type: RECEIVE_USER, user: payload.user, albums: payload.albums, photos: payload.photos});
    });
  };
}
