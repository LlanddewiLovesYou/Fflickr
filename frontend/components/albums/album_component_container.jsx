import React from "react";
import {connect} from 'react-redux';
import AlbumComponent from './album_component';
import {requestAlbum} from '../../actions/album_actions'

const photosByAlbum = (album, state) => {
  if (album && album.photoIds) {
    return album.photoIds.map( (id) => state.photos[id]);
  } else {
    return [];
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    cover_photo: photosByAlbum(state.albums[ownProps.album.id], state)[0]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAlbum: (id) => dispatch(requestAlbum(id)),
    deleteAlbum: (id) => dispatch(deleteAlbum(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumComponent);
