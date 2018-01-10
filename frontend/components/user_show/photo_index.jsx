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
      return (
        <main>
          {this.props.photos.map((photo) => {
            return <PhotoComponent photo={photo}/>;
          })}
          <Link to={`/users/${this.props.user.id}/photos/new`}>Upload a Photo</Link>
        </main>
      );
      } else {
        return "LOADING";
      }
    }
  }



export default PhotoIndex;
