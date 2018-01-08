import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class AlbumShowMounting extends React.Component {

  constructor (props) {
    super(props);
    this.state = {displayed_photo: null};
  }

  render () {
    return (
      <main className='album-show-mounting-component'>
        <div className='chevron'>CHEVRON BACK</div>
          <div>PHOTO AREA</div>
        <div className='chevron'>CHEVRON FORWARD</div>



      </main>



    );
  }


}

export default AlbumShowMounting;
