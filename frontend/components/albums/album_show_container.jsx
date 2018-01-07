import React from "react";
import {connect} from 'react-redux';
import AlbumShow from '../user_show/album_show';
import {requestAlbum} from '../../actions/album_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.albums[ownProps.match.params.albumId],
    albumId: ownProps.match.params.albumId,
    user: state.users[ownProps.match.params.userId],
    userId: ownProps.match.params.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAlbum: (id) => dispatch(requestAlbum(id)),
    deleteAlbum: (id) => dispatch(deleteAlbum(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
