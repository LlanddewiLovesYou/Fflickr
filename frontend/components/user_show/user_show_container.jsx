import React from "react";
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowPage from './user_show';
import { receiveUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    userShowId: ownProps.match.params.userId,
    user: state.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveUser: (id) => dispatch(receiveUser(id))
  };
};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShowPage));
