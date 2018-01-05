import merge from 'lodash/merge';
import {RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM} from '../actions/album_actions';


const albumsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUMS:
      newState = merge({}, state, action.albums);
      return newState;
    case RECEIVE_ALBUM:
      newState = merge({}, state, {[action.album.id]: action.album});
      return newState;
    case REMOVE_ALBUM:
      newState = merge({}, state);
      delete newState[action.album.id];
      return newState;
    default:
      return state;
  }
};

export default AlbumsReducer;
