import React from "react";
import {connect} from 'react-redux';
import AlbumForm from '../albums/album_form';
import {createAlbum, updateAlbum} from '../../actions/album_actions';
import { withRouter } from 'react-router-dom';
import AlbumComponent from './album_component';

const mapStateToProps = (state, ownProps) => {
  let album;
  let formType;
  if (ownProps.location.pathname.split('/').reverse()[0] === 'edit') {
    formType = 'edit';

    album = state.albums[ownProps.match.params.albumId]
  } else {
    formType = 'new';
  }
  return {
    loggedIn: state.session.currentUser,
    errors: state.errors.session,
    currentUser: state.session.currentUser,
    album,
    formType,
    selected: state.photos.selected
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;
  if (ownProps.location.pathname.split('/').reverse()[0] === 'newalbum') {

    processForm = createAlbum;
  } else {
    processForm = updateAlbum;
  }

  return {
    processForm: (album) => dispatch(processForm(album))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumForm));
