import React from "react";
import {Link} from 'react-router-dom';
import GreetingContainer from '../auth/greeting_container';

const Footer = () => {
  return (
    <div className='foot-position'>
    <div className='footer'>
          <div className="footer-links-top">
            <Link to="/users/:userId" className='foot-link'>You</Link>
            <Link to=""className='foot-link'>About</Link>
            <Link to="" className='foot-link'>Jobs</Link>
            <Link to="" className='foot-link'>Blog</Link>
            <Link to="" className='foot-link'>Mobile</Link>
            <Link to="" className='foot-link'>Developers</Link>
            <Link to="" className='foot-link'>Guidelines</Link>
            <Link to="" className='foot-link'>Feedback</Link>
            <Link to="" className='foot-link'>Report Abuse</Link>
            <Link to="" className='foot-link'>Help Forum</Link>
            <Link to="" className='foot-link'>English</Link>
          </div>
          <div className='ledger'></div>
          <div className="footer-links-bottom">
            <Link to="" className='foot-link'>Privacy</Link>
            <Link to="" className='foot-link'>Terms</Link>
            <Link to="" className='foot-link'>Yahuu Safely</Link>
            <Link to="" className='foot-link'>Help</Link>
          </div>
    </div>
  </div>
  );
};

export default Footer;
