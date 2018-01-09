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
    let joined;
    let occupation;
    let hometown;
    let current_city;
    let email;
    let website;

    if (this.props.user.joined) {
      joined = <li>Joined: {this.props.user.joined}</li>;
    } else {
      joined = null;
    }
    if (this.props.user.occupation) {
      <li>Occupation: {this.props.user.occupation}</li>;
    } else {
      joined = null;
    }
    if (this.props.user.hometown) {
      hometown = <li>Hometown: {this.props.user.hometown}</li>;
    } else {
      hometown = null;
    }
    if (this.props.user.current_city) {
      current_city = <li>Current City / Country: {this.props.user.current_city}</li>;
    } else {
      current_city = null;
    }
    if (this.props.user.email) {
      email = <li>E-mail: {this.props.user.email}</li>;
    } else {
      email = null;
    }
    if (this.props.user.website) {
      website = <li>Website: {this.props.user.website}</li>;
    } else {
      website = null;
    }

    return (
      <main>
        <span>
          <div className='user-info-wrapper'>
            <ul>
              <div>{joined}</div>
              <div>{occupation}</div>
              <div>{hometown}</div>
              <div>{current_city}</div>
              <div>{email}</div>
              <div>{website}</div>
            </ul>
          </div>
        </span>
        <Link to={`/users/${this.props.userShowId}/update-user-info`}>Update User Info</Link>
      </main>
    );
  }


} export default UserInfoWrapper;
