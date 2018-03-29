import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../misc/navbar'
// import {AuthNavbar} from '../auth/auth_navbar';
import {connect} from 'react-redux';
import Footer from '../misc/footer';

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
  <main>
        <div className='bg'>

            <NavBar/>

            <div className="inspiration-wrapper">
              <h1 className='inspiration-text'> Find your inspiration. </h1>
              <h1 className='splash-text'> Join the Fflickr community, home to tens of <br></br> photos and 2 groups. </h1>
              {button}
            </div>
          <Footer/>
      </div>

  </main>
  );
};

export default connect(mapStateToProps, null)(SplashPage);
