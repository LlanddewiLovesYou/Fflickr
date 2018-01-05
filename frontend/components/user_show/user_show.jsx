import React from 'react';
import {Link, NavLink, Switch, Route} from 'react-router-dom';
import {NavBar} from '../misc/navbar';
import {UserInfoWrapper} from './user_info_wrapper';
import Photostream from './photostream';
import AlbumIndex from './album_index'


const UserShowPage = ({currentUser}) => {

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

        <div className='navlink-bar'>
          <NavLink to={`/users/${currentUser.id}/info`} className='link' activeClassName='active'>User Info</NavLink>
          <NavLink to={`/users/${currentUser.id}/photos`} className='link' activeClassName='active'>Photostream</NavLink>
          <NavLink to={`/users/${currentUser.id}/albums`} className='link' activeClassName='active'>Albums</NavLink>
        </div>

        <div className='user-show-component'>
          <Route exact path='/users/:userId/info' component={UserInfoWrapper}/>
          <Route exact path='/users/:userId/photos' component={Photostream}/>
          <Route exact path='/users/:userId/albums' component={AlbumIndex}/>
        </div>


  </main>
  );
};

export default UserShowPage;
