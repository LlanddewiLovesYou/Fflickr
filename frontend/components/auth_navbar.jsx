import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from './greeting_container';
// import * as Search from '../../app/assets/images/search.png';


export const AuthNavbar = () => {
  return (
    <div className='auth_navbar'>
        <div className='Navbar-Logo'>Fflickr</div>
        <div className="Searchbar"><img src={window.staticImages.searchImage}/>Photos, People, Groups (Coming Soon!)</div>
        <GreetingContainer/>
    </div>
  );
};
