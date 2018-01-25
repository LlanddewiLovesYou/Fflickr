import React from "react";
import {connect} from 'react-redux';
import PhotoIndex from '../user_show/photo_index';
import {selectPhoto} from '../../actions/photo_actions';



const getPhotosByUser = (state, user) => {
  if (user) {
    return user.photoIds.map( (id) => state.photos[id] );
  } else {
    return [];
  }
};

const mapStateToProps = (state, ownProps) => {
  const user = state.users[ownProps.match.params.userId];
  return {
    photos: getPhotosByUser(state, user),
    user,
    selected: state.photos.selected
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    requestPhoto: (id) => dispatch(requestPhoto(id)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    updatePhoto: (id) => dispatch(updatePhoto(id))
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
