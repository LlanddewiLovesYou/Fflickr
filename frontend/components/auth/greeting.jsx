import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className='login'>Login</Link>

    <Link to="/signup" className='signup'>Sign up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout, history) => {
  const fancyLogout = () => {
    logout();
    debugger
    history.push("/")
  }

  return (
	<hgroup className="login-signup">
    <div className='login-flex'>
      <h2 className="header-name"><Link to={`/users/${currentUser.id}`}>Hi, {currentUser.username}!</Link></h2>
      <button className="signup" onClick={fancyLogout}>Log Out</button>
    </div>
	</hgroup>
  )
};

const Greeting = ({ currentUser, logOut, history }) => (
  currentUser ? personalGreeting(currentUser, logOut, history) : sessionLinks()
);

export default Greeting;
