import React from "react";
import {connect} from 'react-redux';
import UserShowPage from './user_show';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    // username: state.users[userId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};




export default connect(mapStateToProps, mapDispatchToProps)(UserShowPage);
