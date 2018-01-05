export const RECEIVE_USER = 'RECEIVE_USER';
import * as UserApi from '../util/user_api_util';


const receiveUser = (id) => {
  return (dispatch) => {
    return UserApi.fetchUser(id).then((payload) => {
      dispatch({type: RECEIVE_USER, user: payload.user, albums: payload.albums});
    });
  };
};
