import merge from 'lodash/merge';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_ALBUM} from '../actions/album_actions';
import {RECEIVE_PHOTO} from '../actions/photo_actions';
import {RECEIVE_PHOTOS} from '../actions/photo_actions';


const usersReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_PHOTOS:
      newState = merge({}, state)
    case RECEIVE_PHOTO:
      newState = merge({}, state, action.user);
      return newState;
    case RECEIVE_USER:
      newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_ALBUM:
      newState = merge({}, state, action.user);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
