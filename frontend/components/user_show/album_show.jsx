import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumComponent from '../albums/album_component';
import NavBar from '../misc/navbar';


class AlbumShow extends React.Component {

  componentDidMount() {
    this.props.requestAlbum(this.props.albumId);
  }

  render () {
    debugger
    if (this.props.album) {
      return (
        <main className="album-show-wrapper">
          <NavBar/>
          <h1>{this.props.album.title}</h1>
          <h1>{this.props.album.description}</h1>
          <h1>{this.props.album.id}</h1>
            <br></br>
            <Link to={`/users/${this.props.userId}/albums/${this.props.album.id}/edit`}>Edit Album</Link>
        </main>
      );
    } else {
      return "LOADING";
    }
}


}


export default AlbumShow;
