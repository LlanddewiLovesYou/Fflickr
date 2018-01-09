import React from 'react';
import GreetingContainer from './auth/greeting_container';
import Greeting from './auth/greeting';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SessionFormContainer from './auth/session_form_container';
import {AuthRoute} from '../util/route_util';
// import ShowContainer from './photos/show_container';
import {PhotoShowPage} from './photos/photo_show_page';
import {AuthNavbar} from './auth/auth_navbar';
import NavBar from './misc/navbar';
import SplashPage from './splash_page/splash_page';
import {LoginPage} from './login_page/login_page';
import {NewUserPage} from './new_user_page/new_user_page';
import UserShowContainer from './user_show/user_show_container';
import Footer from './misc/footer';
import AlbumShow from './albums/album_show_container';
import PhotoIndex from './user_show/photo_index';
import PhotoUploadForm from './photos/photo_upload_form';


const App = () => (
<main>
  <header>
  </header>
  <Switch>
    <Route exact path='/' component={SplashPage} />
    <AuthRoute path="/login" component={LoginPage}  />
    <AuthRoute path="/signup" component={NewUserPage} />
    <Route exact path='/users/:userId/albums/:albumId' component={AlbumShow}/>
    <Route exact path='/users/:userId/photos' component={PhotoIndex}/>
    <Route exact path='/users/:userId/photos/new' component={PhotoUploadForm}/>
    <Route path="/users/:userId" component={UserShowContainer} />
    <Route path="/users/:userId/photos/:photoId" component={PhotoShowPage} />
  </Switch>

</main>
);

export default App;
