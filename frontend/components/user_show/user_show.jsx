import React from 'react';
import {Link} from 'react-router-dom';
import {NavBar} from '../misc/navbar';
import {UserInfoWrapper} from './user_info_wrapper';


export const UserShowPage = (props) => {
  return (
    <main>
      <NavBar/>
        <span>
          <div className='user-cover-image'>
            <h1 className='username'>Username</h1>
            <h1 className='joined'>Joined 2018</h1>
            <img className='user-show-avatar'/>
          </div>
        </span>
        <UserInfoWrapper/>
    </main>
  );
};
