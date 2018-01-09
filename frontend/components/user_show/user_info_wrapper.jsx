import React from 'react';
import {Link} from 'react-router-dom';
import {UserInfoItem} from './user_info_item';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowPage from './user_show';
import { receiveUser } from "../../actions/user_actions";

class UserInfoWrapper extends React.Component {

  constructor(props) {
    super(props);
  }


  render(){
    return (
      <main>
        <span>
          <div className='user-info-wrapper'>
            <UserInfoItem/>
            <h1>More user info coming soon!</h1>
          </div>
        </span>
      </main>
    );
  }


} export default UserInfoWrapper;
