export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUMS';
export const REMOVE_ALBUM = 'RECEIVE_ALBUMS';
export const UPDATE_ALBUM = 'RECEIVE_ALBUMS';
import * as AlbumApi from = '../util/album_api_util';

export const requestAlbums = () => {
  return (dispatch) => {
    return AlbumApi.fetchAlbums().then((albums) => {
      dispatch({type: RECEIVE_ALBUMS, albums})
    })
  };
};

export const requestAlbum = (id) => {
  return (dispatch) => {
    return AlbumApi.fetchAlbum(id).then((album) => {
      dispatch({type: RECEIVE_ALBUM, album})
    })
  };
};

export const createAlbum = (album) => {
  return (dispatch) => {
    return AlbumApi.createAlbum(album).then((album) => {
      dispatch({type: RECEIVE_ALBUM, album})
    })
  };
};

export const updateAlbum = (album) => {
  return (dispatch) => {
    return AlbumApi.updateAlbum(album).then((album) => {
      dispatch({type: RECEIVE_ALBUM, album})
    })
  };
};

export const deleteAlbum = (albumId) => {
  return (dispatch) => {
    return AlbumApi.deleteAlbum(albumId).then((album) => {
      dispatch({type: REMOVE_ALBUM, [albumId]: album})
    })
  };
};
