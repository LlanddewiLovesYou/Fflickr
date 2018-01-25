import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumComponent from '../albums/album_component_container';


class AlbumIndex extends React.Component {

  componentDidMount() {
    this.props.receiveUser(this.props.userId);
  }

  render () {
    if (this.props.user) {
      return (
        <main className="album-index-wrapper">
        
              <ul className='album-index'>
                {this.props.albums.map((album) => {
                  return <AlbumComponent album={album} />;
                })}
              </ul>
              <br></br>



        </main>
      );
    } else {
      return "LOADING";
    }
}


};


export default AlbumIndex;
