import React from 'react';
import {Link} from 'react-router-dom';
import {AuthNavbar} from './auth_navbar';

export const SplashPage = () => {
  return (
    <main className='bg'>

      <AuthNavbar/>
      <div className="inspiration-wrapper">
        <h1 className='inspiration-text'> Find your inspiration. </h1>
        <h1 className='splash-text'> Join the Flickr community, home to tens of billions of <br></br> photos and 2 million groups. </h1>

        <Link to="/signup" className='signup-text-button'>Sign up</Link>
      </div>

    </main>
  );
};
