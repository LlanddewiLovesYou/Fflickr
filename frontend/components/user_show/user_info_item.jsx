import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowPage from './user_show';
import { receiveUser } from "../../actions/user_actions";

export const UserInfoItem = (props) => {
  return (
    <main>
      <span className="user-info-item">
        <div className="user-info-field">Name:</div>
        <div className="user-info-field">This should display the users name but it can't until its wrapper is converted to a class component</div>
      </span>
    </main>
  );
};
