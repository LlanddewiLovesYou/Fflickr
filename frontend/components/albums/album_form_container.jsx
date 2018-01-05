import React from "react";
import {connect} from 'react-redux';
import AlbumForm from '../albums/album_form';
import {createAlbum, updateAlbum} from '../../actions/album_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let user;
  let formType;
  if (ownProps.location.pathname === '/:userId/albums/new') {
    formType = 'new';
  } else {
    formType = 'edit';
  }
  return {
    loggedIn: state.currentUser,
    errors: state.errors.session,
    formType,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;

  if (ownProps.location.pathname === '/albums/new') {
    processForm = createAlbum;
  } else {
    processForm = updateAlbum;
  }

  return {
    processForm: (album) => dispatch(processForm(album))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumForm));
