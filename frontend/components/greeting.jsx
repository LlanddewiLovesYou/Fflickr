import React from 'react';
import { Link } from 'react-router-dom';


const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className='login'>Login</Link>

    <Link to="/signup" className='signup'>Sign up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="login-signup">
    <div className='login-flex'>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="signup" onClick={logout}>Log Out</button>
    </div>
	</hgroup>
);

const Greeting = ({ currentUser, logOut }) => (
  currentUser ? personalGreeting(currentUser, logOut) : sessionLinks()
);

export default Greeting;
