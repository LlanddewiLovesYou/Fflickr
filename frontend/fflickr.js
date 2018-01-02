import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/Root';
import * as SessionAPI from "./util/session_api_util";


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = configureStore();
  // window.login = SessionAPI.login;
  // window.logout = SessionAPI.logout;
  // window.newUser = SessionAPI.newUser;
  ReactDOM.render(<h1>Welcome to Fflickr</h1>, root);
});
