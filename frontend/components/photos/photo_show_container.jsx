import React from "react";
import {connect} from 'react-redux';
import PhotoShowPage from './photo_show_page';
import {requestPhoto} from '../../actions/photo_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  let photo = state.photos[ownProps.match.params.photoId]
  let tags = []
  if (photo) {
    tags = photo.tag_ids.map((tag_id) => {
      return state.tags[tag_id]
    })
  }
  return {
    photo,
    user: state.users[ownProps.match.params.userId],
    photoId: ownProps.match.params.photoId,
    userId: ownProps.match.params.userId,
    tags
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPhoto: (id) => dispatch(requestPhoto(id)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    updatePhoto: (id) => dispatch(updatePhoto(id))
  };
};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShowPage));
