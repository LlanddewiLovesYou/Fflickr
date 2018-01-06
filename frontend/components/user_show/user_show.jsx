import React from 'react';
import {Link, NavLink, Switch, Route} from 'react-router-dom';
import {NavBar} from '../misc/navbar';
import {UserInfoWrapper} from './user_info_wrapper';
import Photostream from './photostream';
import AlbumIndex from '../albums/album_index_container';
import AlbumForm from '../albums/album_form_container';
import Footer from '../misc/footer';
import AlbumShow from '../albums/album_show_container';

class UserShowPage extends React.Component {

componentDidMount() {
  this.props.receiveUser(this.props.userShowId)
}


render () {
  if (this.props.user) {
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
            <NavLink to={`/users/${this.props.user.id}/info`} className='link' activeClassName='active'>User Info</NavLink>
            <NavLink to={`/users/${this.props.user.id}/photos`} className='link' activeClassName='active'>Photostream</NavLink>
            <NavLink to={`/users/${this.props.user.id}/albums`} className='link' activeClassName='active'>Albums</NavLink>
          </div>

          <div className='user-show-component'>
            <Route exact path='/users/:userId' component={UserInfoWrapper} />
            <Route exact path='/users/:userId/info' component={UserInfoWrapper}/>
            <Route exact path='/users/:userId/photos' component={Photostream}/>
            <Route exact path='/users/:userId/albums' component={AlbumIndex}/>
            <Route exact path='/users/:userId/albums/new' component={AlbumForm}/>
            <Route exact path='/users/:userId/albums/:albumId' component={AlbumShow}/>
          </div>


      </main>
      );
    } else {
      return (
        <h1> LOADING </h1>
      )
    }
  };
};

export default UserShowPage;
