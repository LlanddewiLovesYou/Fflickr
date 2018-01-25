import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPI from "./util/session_api_util";
import Root from './components/root';
import configureStore from './store/store';
import {selectPhoto} from './actions/photo_actions'
import {createAlbum} from './actions/album_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState;
    if (window.currentUser) {
      preloadedState = { session: { currentUser: window.currentUser } };
    } else {
      preloadedState = { session: { currentUser: null } };
    }
  const store = configureStore(preloadedState);
  // window.login = SessionAPI.login;
  // window.logout = SessionAPI.logout;
  // window.newUser = SessionAPI.newUser;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectPhoto = selectPhoto;
  window.createAlbum = createAlbum;
  ReactDOM.render(<Root store={ store }/>, root);
});
