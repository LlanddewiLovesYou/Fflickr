export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

import * as AlbumApi from '../util/albums_api_util';

// export const requestAlbums = () => {
//   return (dispatch) => {
//     return AlbumApi.fetchAlbums().then((albums) => {
//       dispatch({type: RECEIVE_ALBUMS, albums});
//     });
//   };
// };

export const requestAlbum = (id) => {
  return (dispatch) => {
    return AlbumApi.fetchAlbum(id).then((payload) => {
      dispatch({type: RECEIVE_ALBUM, album: payload.album});
    });
  };
};

export const createAlbum = (album) => {
  return (dispatch) => {
    debugger
    return AlbumApi.createAlbum(album).then((payload) => {
      dispatch({type: RECEIVE_ALBUM, album: payload.album});
    });
  };
};

export const updateAlbum = (album) => {
  return (dispatch) => {
    return AlbumApi.updateAlbum(album).then((payload) => {
      dispatch({type: RECEIVE_ALBUM, album: payload.album});
    });
  };
};

export const deleteAlbum = (albumId) => {
  return (dispatch) => {
    return AlbumApi.deleteAlbum(albumId).then((album) => {
      dispatch({type: REMOVE_ALBUM, album});
    });
  };
};
