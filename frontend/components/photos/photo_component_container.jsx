import React from "react";
import {connect} from 'react-redux';
import PhotoComponent from './photo_component';
import {receiveUser} from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';
import {requestPhoto} from '../../actions/photo_actions';


const mapStateToProps = (state, ownProps) => {
  let user;
  let userId;
  if (ownProps.match.params.userId) {
    user = state.users[ownProps.match.params.userId];
    userId = ownProps.match.params.userId
  } else {
    user = state.users[ownProps.photo.user_id]
    userId = ownProps.photo.user_id
  }
  return {
    user,
    userId
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    requestPhoto: (id) => dispatch(requestPhoto(id)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    updatePhoto: (id) => dispatch(updatePhoto(id)),
    receiveUser:  (id) => dispatch(receiveUser(id))
  };
};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoComponent));
