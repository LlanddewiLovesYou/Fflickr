import React from "react";
import {connect} from 'react-redux';
import PhotoComponent from '../photos/photo_component';


class PhotoIndex extends React.Component {


  render () {
    return (
      <main>
        {this.props.photos.map((photo) => {
          return <PhotoComponent photo={photo}/>;
        })}
      </main>
    );
  }
}



export default PhotoIndex;
