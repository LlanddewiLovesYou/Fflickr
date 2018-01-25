export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const SELECT_PHOTO = 'SELECT_PHOTO';

import * as PhotoApi from '../util/photos_api_util';


export const requestPhoto = (id) => {
  return (dispatch) => {
    return PhotoApi.fetchPhoto(id).then((payload) => {
      dispatch({type: RECEIVE_PHOTO, photo: payload.photo, album: payload.album, user: payload.user});
    });
  };
};

export const selectPhoto = (id) => {
  return ({type: SELECT_PHOTO, photoId: id});
}

export const createPhoto = (photo) => {
  return (dispatch) => {
    return PhotoApi.createPhoto(photo).then((payload) => {

      dispatch({type: RECEIVE_PHOTO, photo: payload.photo});
    });
  };
};

export const updatePhoto = (photo) => {
  return (dispatch) => {
    return PhotoApi.updatePhoto(photo).then((payload) => {
      dispatch({type: RECEIVE_PHOTO, photo: payload.photo});
    });
  };
};

export const deletePhoto = (photoId) => {
  return (dispatch) => {
    return PhotoApi.deletePhoto(photoId).then((photo) => {
      dispatch({type: REMOVE_PHOTO, photo});
    });
  };
};
