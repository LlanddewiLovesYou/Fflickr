import merge from "lodash/merge";
import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  SELECT_PHOTO
} from "../actions/photo_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_ALBUM } from "../actions/album_actions";
import { REMOVE_COMMENT, RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_TAG } from '../actions/tags_actions'

const PhotosReducer = (state = { selected: [] }, action) => {
  let newState;
  // let USER_PHOTOS;
  switch (action.type) {
    case RECEIVE_PHOTOS:
      newState = merge({}, state, {photos: action.photos})
      return newState
    case RECEIVE_ALBUM:
      newState = merge({}, state, action.photos);
      newState.selected = [];
      return newState;
    case RECEIVE_PHOTO:
      newState = merge({}, state, { [action.photo.id]: action.photo });
      return newState;
    case REMOVE_PHOTO:
      newState = merge({}, state);
      delete newState[action.photo.id];
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state, { [action.photo.id]: action.photo });
      return newState;
    case SELECT_PHOTO:
      newState = merge({}, state);
      if (!newState.selected.includes(action.photoId)) {
        newState.selected.push(action.photoId);
      } else if (newState.selected.includes(action.photoId)) {
        newState.selected = newState.selected.filter((el) => {
          return el !== action.photoId
        })
      }
      return newState;
    case RECEIVE_USER:
      newState = merge({}, state, action.photos);
      return newState;
    case RECEIVE_TAG:
      newState = merge({}, state, action.photos);
      return newState
    default:
      return state;
  }
};

export default PhotosReducer;
