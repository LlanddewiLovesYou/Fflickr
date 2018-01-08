import React from 'react';
import {Link} from 'react-router-dom';
import {UserInfoItem} from './user_info_item';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowPage from './user_show';
import { receiveUser } from "../../actions/user_actions";


export const UserInfoWrapper = (props) => {
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
};

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




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInfoWrapper));
