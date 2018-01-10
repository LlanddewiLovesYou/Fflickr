import React from 'react';
import {Link, NavLink, Switch, Route} from 'react-router-dom';
import NavBar from '../misc/navbar';
import UserInfoWrapper from './user_info_wrapper_container';
import Photostream from './photostream';
import AlbumIndex from '../albums/album_index_container';
import AlbumForm from '../albums/album_form_container';
import Footer from '../misc/footer';
import AlbumShow from '../albums/album_show_container';
import PhotoIndex from '../photos/photo_index_container';
import UserInfoForm from './user_info_form';
import PhotoStream from './Photostream';

class UserShowPage extends React.Component {

componentDidMount() {
  this.props.receiveUser(this.props.userShowId);
}


render () {
  if (this.props.user) {
    return (
        <main>

          <NavBar/>

          <span>
              <div className='user-cover-image'>

                <h1 className='username'>{this.props.user.username}</h1>
                <h1 className='joined'>Joined 2018</h1>
              </div>
          </span>

          <div className='navlink-bar'>
            <NavLink to={`/users/${this.props.user.id}/info`} className='link' activeClassName='active'>User Info</NavLink>
            <NavLink to={`/users/${this.props.user.id}/photos`} className='link' activeClassName='active'>Photostream</NavLink>
            <NavLink to={`/users/${this.props.user.id}/albums`} className='link' activeClassName='active'>Albums</NavLink>
          </div>

          <div className='user-show-component'>
            <Switch>
              <Route exact path='/users/:userId' component={UserInfoWrapper} />
              <Route exact path='/users/:userId/photos' component={PhotoIndex}/>
              <Route exact path='/users/:userId/info' component={UserInfoWrapper}/>
              <Route exact path='/users/:userId/albums' component={AlbumIndex}/>
              <Route exact path="/users/:userId/update-user-info" component={UserInfoForm} />
              <Route exact path='/users/:userId/newalbum' component={AlbumForm}/>
              <Route exact path='/users/:userId/albums/:albumId/edit' component={AlbumForm}/>
            </Switch>
          </div>


      </main>
      );
    } else {
      return (
        <h1> LOADING </h1>
      );
    }
  }
}





export default UserShowPage;
