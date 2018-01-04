import React from 'react';
import {Link} from 'react-router-dom';
import {AuthNavbar} from '../auth/auth_navbar';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};


const SplashPage = (props) => {
  let button = <Link to="/signup" className='signup-text-button'>Sign up</Link>;

  if (props.currentUser) {
    button = null;
  }

  return (
    <main className='bg'>

      <AuthNavbar/>
      <div className="inspiration-wrapper">
        <h1 className='inspiration-text'> Find your inspiration. </h1>
        <h1 className='splash-text'> Join the Flickr community, home to tens of billions of <br></br> photos and 2 million groups. </h1>
      </div>
      {button}
    </main>
  );
};

export default connect(mapStateToProps, null)(SplashPage);
