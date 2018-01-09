import React from "react";
import {connect} from 'react-redux';
import PhotoIndex from '../user_show/photo_index';



const getPhotosByUser = (state, user) => {
  if (user) {
    return user.photo_ids.map( (id) => disatch(requestPhoto(state.photos[id])));
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    photos: getPhotosByUser(state, state.users[ownProps.match.params.userId]),
    user: state.users[ownProps.match.params.userId],
    photoId: ownProps.match.params.photoId,
    userId: ownProps.match.params.userId
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
