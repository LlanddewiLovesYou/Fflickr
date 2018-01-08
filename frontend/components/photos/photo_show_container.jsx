import React from "react";
import {connect} from 'react-redux';
import PhotoShowPage from './photo_show_page';

const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.photos[ownProps.match.params.photoId],
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




export default connect(mapStateToProps, mapDispatchToProps)(PhotoShowPage);
