import React from "react";
import {connect} from 'react-redux';
import PhotoComponent from '../photos/photo_component_container';
import {Route, Link} from 'react-router-dom';

class PhotoIndex extends React.Component {

  constructor(props) {
    super(props);
    this.selection = []
  }



  render () {

    if (this.props.photos) {

      return (
        <main>
          <Link to={`/users/${this.props.user.id}/newalbum`} className='new-album-button'>Create Album From Selection</Link>
          <div className="photo-index-wrapper">

            {this.props.photos.map((photo) => {
              return <PhotoComponent photo={photo}/>;
            })}
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
