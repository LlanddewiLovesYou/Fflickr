import React from 'react';
import {Link} from 'react-router-dom';
import SessionFormContainer from '../auth/session_form_container';


export const LoginPage = () => {
  return (
    <main>
      <h1 className='yahuu-logo'>YAHUU!</h1>
      <span className="login-wrapper">
        <div className="login-text-wrapper">
        <div className='login-text'>Yahuu makes it easy to enjoy what matters most in your world.</div>
        <br></br>
        <div className='login-subtext'>Best in class Yahuu Mail, breaking local, national and global news, finance,
           sports, music, movies and more. You get more out of the web, you get more out of life.</div>
       </div>
      <SessionFormContainer/>
    </span>
    </main>
  );
};
