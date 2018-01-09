import React from 'react';
import {Link} from 'react-router-dom';
import {UserInfoItem} from './user_info_item';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowPage from './user_show';

class UserInfoWrapper extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.receiveUser(this.props.userShowId);
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
        <Link to={`/users/${this.props.userShowId}/update-user-info`}>Update User Info</Link>
      </main>
    );
  }


} export default UserInfoWrapper;
