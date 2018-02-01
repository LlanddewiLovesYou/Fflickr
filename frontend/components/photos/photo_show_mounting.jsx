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
    let photo_url = "";
    if (this.props.photo) {
      photo_url = this.props.photo.photo_url
    }
    return (
      <main className='photo-show-mounting-component'>


          <img src={photo_url} className="photo-show-area"/>


      </main>



    );
  }


}

export default PhotoShowMounting;


// <img onClick={this.props.clickLeft} src={window.staticImages.leftChevron}/>


// <img onClick={this.props.clickRight} src={window.staticImages.rightChevron}/>
