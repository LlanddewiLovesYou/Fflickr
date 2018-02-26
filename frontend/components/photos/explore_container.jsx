import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Explore from './explore'
import { requestExplore } from '../../actions/photo_actions'
import { receiveUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    photos: state.photos.photos
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestExplore: () => dispatch(requestExplore()),
    // receiveUser:  (id) => dispatch(receiveUser(id)),
    // requestPhoto: (id) => dispatch(requestPhoto(id)),
    // deletePhoto: (id) => dispatch(deletePhoto(id)),
    // updatePhoto: (id) => dispatch(updatePhoto(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Explore));
