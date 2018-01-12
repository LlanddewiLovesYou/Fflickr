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
        <main className="photo-index-wrapper">
          {this.props.photos.map((photo) => {
            return <PhotoComponent photo={photo}/>;
          })}
        </main>
      );
      } else {
        return "LOADING";
      }
    }
  }



export default PhotoIndex;
