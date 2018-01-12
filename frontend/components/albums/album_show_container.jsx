import React from "react";
import {connect} from 'react-redux';
import AlbumShow from '../user_show/album_show';
import {requestAlbum, deleteAlbum} from '../../actions/album_actions';

const photosByAlbum = (album, state) => {
  if (album && album.photoIds) {
    return album.photoIds.map( (id) => state.photos[id]);
  } else {
    return [];
  }
};

const mapStateToProps = (state, ownProps) => {
  const album = state.albums[ownProps.match.params.albumId];
  const photos = photosByAlbum(album, state);
  
  return {
    album,
    albumId: ownProps.match.params.albumId,
    user: state.users[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    photos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAlbum: (id) => dispatch(requestAlbum(id)),
    deleteAlbum: (id) => dispatch(deleteAlbum(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
