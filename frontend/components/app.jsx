import React from 'react';
import GreetingContainer from './auth/greeting_container';
import Greeting from './auth/greeting';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import {AuthRoute} from '../util/route_util';
import ShowContainer from './photos/show_container';
import {Photos} from './photos/photos';
import {AuthNavbar} from './auth/auth_navbar';
import {SplashPage} from './splash_page/splash_page';

const App = () => (
<main>
  <header>
  </header>
  <Switch>
    <Route exact path='/' component={SplashPage} />
    <AuthRoute path="/login" component={SessionFormContainer}  />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route path="/users/show/:userId" component={ShowContainer} />
    <Route path="/photos" component={Photos} />
  </Switch>
</main>
);

export default App;
