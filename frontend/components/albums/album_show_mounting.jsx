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

        <img src={window.staticImages.leftChevron}></img>

            <div className="photo-show-area">PHOTO AREA</div>

        <img src={window.staticImages.rightChevron}></img>

      </main>



    );
  }


}

export default AlbumShowMounting;
