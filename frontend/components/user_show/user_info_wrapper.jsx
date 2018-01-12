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
      joined = <li>Joined:    {`${this.props.user.joined}`}</li>;
    } else {
      joined = null;
    }
    if (this.props.user.occupation) {
      occupation = <li>Occupation:    {`  ${this.props.user.occupation}`}</li>;
    } else {
      occupation = null;
    }
    if (this.props.user.hometown) {
      hometown = <li>Hometown:    {`   ${this.props.user.hometown}`}</li>;
    } else {
      hometown = null;
    }
    if (this.props.user.current_city) {
      current_city = <li>Current City / Country:   {`   ${this.props.user.current_city}`}</li>;
    } else {
      current_city = null;
    }
    if (this.props.user.email) {
      email = <li>E-mail:    {`   ${this.props.user.email}`}</li>;
    } else {
      email = null;
    }
    if (this.props.user.website) {
      website = <li>Website:    {`   ${this.props.user.website}`}</li>;
    } else {
      website = null;
    }

    return (
      <main>
        <span>
          <div className='user-info-wrapper'>
            <ul>
              <div className='user-info-items'>{joined}</div>
              <div className='user-info-items'>{occupation}</div>
              <div className='user-info-items'>{hometown}</div>
              <div className='user-info-items'>{current_city}</div>
              <div className='user-info-items'>{email}</div>
              <div className='user-info-items'>{website}</div>
            </ul>
            <Link to={`/users/${this.props.userShowId}/update-user-info`} className="update-user-button">Update User Info</Link>
          </div>
        </span>
      </main>
    );
  }


} export default UserInfoWrapper;
