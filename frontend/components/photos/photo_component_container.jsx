import React from "react";
import {connect} from 'react-redux';
import PhotoComponent from './photo_component';
import {receiveUser} from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {


  const user = state.users[ownProps.photo.user_id];
  return {
    user
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
