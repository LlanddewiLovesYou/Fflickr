import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import PhotoComponentContainer from './photo_component_container';

class PhotoShowMounting extends React.Component {

  constructor (props) {
    super(props);
    this.state = {displayed_photo: null};
  }



  render () {
    debugger
    return (
      <main className='photo-show-mounting-component'>

        <img src={window.staticImages.leftChevron}/>

          <img src={this.props.photo.photo_url} className="photo-show-area"/>

        <img src={window.staticImages.rightChevron}/>

      </main>



    );
  }


}

export default PhotoShowMounting;
