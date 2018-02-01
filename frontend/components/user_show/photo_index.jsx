import React from "react";
import {connect} from 'react-redux';
import PhotoComponent from '../photos/photo_component_container';
import {Route, Link} from 'react-router-dom';

class PhotoIndex extends React.Component {

  constructor(props) {
    super(props);
  }



  render () {

    if (this.props.photos) {
      const photos = this.props.photos.map((photo) => {
        if (photo) {

          if (this.props.selected.includes(photo.id)) {
            return <PhotoComponent photo={photo} selected='true'/>;
          } else {
            return <PhotoComponent photo={photo} selected='false'/>;
          }
        }
      })

      return (
        <main>
          <Link to={`/users/${this.props.user.id}/newalbum`} className='new-album-button'>Create Album From Selection</Link>
          <div className="photo-index-wrapper">
            {photos}
          </div>
        </main>
      );
      } else {
        return "LOADING";
      }
    }
  }



export default PhotoIndex;



// this.selectClick = this.selectClick.bind(this)
