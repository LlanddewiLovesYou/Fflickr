import React from "react";
import {connect} from 'react-redux';
import AlbumComponent from './album_component';
import {requestAlbum} from '../../actions/album_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.userId],
    album: state.albums[ownProps.match.params.albumId],
    albumId: ownProps.match.params.albumId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAlbum: (id) => dispatch(requestAlbum(id)),
    deleteAlbum: (id) => dispatch(deleteAlbum(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumComponent);
