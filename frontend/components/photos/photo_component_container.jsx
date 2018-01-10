import React from "react";
import {connect} from 'react-redux';
import PhotoComponent from './photo_component';


const mapStateToProps = (state, ownProps) => {
  const user = state.users[ownProps.match.params.userId];
  return {
    photos: getPhotosByUser(state, user),
    user
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    requestPhoto: (id) => dispatch(requestPhoto(id)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    updatePhoto: (id) => dispatch(updatePhoto(id))
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(PhotoComponent);
