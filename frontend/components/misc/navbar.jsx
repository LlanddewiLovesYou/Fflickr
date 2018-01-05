import React from "react";
import {Link} from 'react-router-dom';
import GreetingContainer from '../auth/greeting_container';

export const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='Navbar-Logo'>Fflickr</div>
          <div className="nav-links">
            <Link to="/users/:userId">You</Link>
            <Link to="">Explore</Link>
            <Link to="">Create</Link>
          </div>
        <div className="searchbar"><img src={window.staticImages.searchImage}/>(Coming Soon!)</div>
        <GreetingContainer/>
    </div>
  );
};
