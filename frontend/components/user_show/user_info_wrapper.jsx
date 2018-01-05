import React from 'react';
import {Link} from 'react-router-dom';
import {UserInfoItem} from './user_info_item';



export const UserInfoWrapper = (props) => {
  return (
    <main>
        <span>
          <div className='user-info-wrapper'>
            <UserInfoItem/>
            <UserInfoItem/>
            <UserInfoItem/>
          </div>
          <Link to='/'>To Splash Page</Link>
        </span>
    </main>
  );
};
