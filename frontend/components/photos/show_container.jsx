import React from "react";
import {connect} from 'react-redux';
import ShowPage from './show_page';

const mapStateToProps = (state, ownProps) => {
  return {
    // user: state.session.currentUser,
    // username: state.users[userId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};




export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
