import React from "react";
import {connect} from 'react-redux';
import PhotoUploadForm from './photo_upload_form';
import {createPhoto} from '../../actions/photo_actions';
import {receiveUser} from '../../actions/user_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    currentUser: state.session.currentUser,
    user: state.users[ownProps.match.params.userId]
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    createPhoto: (photo) => dispatch(createPhoto(photo)),
    receiveUser: (id) => dispatch(receiveUser(id))
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(PhotoUploadForm);
