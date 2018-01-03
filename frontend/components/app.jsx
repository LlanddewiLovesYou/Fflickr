import React from 'react';
import GreetingContainer from './greeting_container';
import Greeting from './greeting';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SessionFormContainer from './session_form_container';

const App = () => (
<main>
  <div>
    <h1>Fflickr</h1>
    <GreetingContainer/>
  </div>
  <Route path="/login" component={SessionFormContainer} />
  <Route path="/signup" component={SessionFormContainer} />
</main>
);

export default App;
