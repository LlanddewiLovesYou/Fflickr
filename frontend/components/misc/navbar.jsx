import React from "react";
import {Link} from 'react-router-dom';
import GreetingContainer from '../auth/greeting_container';
import {connect} from 'react-redux'


const NavBar = ( { currentUser } ) => {
  return (
    <div className='navbar'>
        <div className='Navbar-Logo'><Link to='/'>Fflickr</Link></div>
          <div className="nav-links">
            <Link to={`/users/${currentUser.id}`}>You</Link>
            <Link to="/explore">Explore</Link>
            <Link to="">Create</Link>
          </div>
        <GreetingContainer/>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  }
}

export default connect(mapStateToProps, null)(NavBar);
