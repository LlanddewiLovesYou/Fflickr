import React from 'react';
import GreetingContainer from './greeting_container';
import Greeting from './greeting';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import {AuthRoute} from '../util/route_util';
import ShowContainer from './show_container';
import {Photos} from './photos';
import {AuthNavbar} from './auth_navbar';
import {SplashPage} from './splash_page';

const App = () => (
<main>
  <header>
  </header>
  <Route path='/' component={SplashPage} />
  <AuthRoute path="/login" component={SessionFormContainer}  />
  <AuthRoute path="/signup" component={SessionFormContainer} />
  <Route path="/users/show/:userId" component={ShowContainer} />
  <Route path="/photos" component={Photos} />
</main>
);

export default App;
