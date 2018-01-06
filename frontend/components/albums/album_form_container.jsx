import React from "react";
import {connect} from 'react-redux';
import AlbumForm from '../albums/album_form';
import {createAlbum, updateAlbum} from '../../actions/album_actions';
import { withRouter } from 'react-router-dom';
import AlbumComponent from './album_component'

const mapStateToProps = (state, ownProps) => {
  let user;
  let formType;
  debugger
  if (ownProps.location.pathname === '/albums/new') {
    formType = 'edit';
  } else {
    formType = 'new';
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
