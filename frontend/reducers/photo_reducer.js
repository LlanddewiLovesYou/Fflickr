import merge from 'lodash/merge';
import {RECEIVE_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO} from '../actions/photo_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_ALBUM} from '../actions/album_actions';


const PhotosReducer = (state = {}, action) => {
  let newState;
  // let USER_PHOTOS;
  switch (action.type) {
    case RECEIVE_ALBUM:
    debugger
      newState = merge({}, state, action.photos);
      return newState;
    case RECEIVE_PHOTO:
      newState = merge({}, state, {[action.photo.id]: action.photo});
      return newState;
    case REMOVE_PHOTO:
      newState = merge({}, state);
      delete newState[action.photo.id];
      return newState;
    case RECEIVE_USER:
      newState = merge({}, state, action.photos);
      return newState;
    default:
      return state;
  }
};

export default PhotosReducer;
