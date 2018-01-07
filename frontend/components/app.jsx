import React from 'react';
import GreetingContainer from './auth/greeting_container';
import Greeting from './auth/greeting';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SessionFormContainer from './auth/session_form_container';
import {AuthRoute} from '../util/route_util';
// import ShowContainer from './photos/show_container';
import {Photos} from './photos/photos';
import {AuthNavbar} from './auth/auth_navbar';
import NavBar from './misc/navbar';
import SplashPage from './splash_page/splash_page';
import {LoginPage} from './login_page/login_page';
import {NewUserPage} from './new_user_page/new_user_page';
import UserShowContainer from './user_show/user_show_container';
import Footer from './misc/footer';
import AlbumShow from './albums/album_show_container';


const App = () => (
<main>
  <header>
  </header>
  <Switch>
    <Route exact path='/' component={SplashPage} />
    <AuthRoute path="/login" component={LoginPage}  />
    <AuthRoute path="/signup" component={NewUserPage} />
    <Route exact path='/users/:userId/albums/:albumId' component={AlbumShow}/>
    <Route path="/users/:userId" component={UserShowContainer} />
    <Route path="/photos" component={Photos} />
    <Route path="/users/:userId/photos" component={Photos} />

  </Switch>
<Footer/>
</main>
);

export default App;
