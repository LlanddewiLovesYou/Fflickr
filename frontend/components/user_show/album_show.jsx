import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumComponent from '../albums/album_component';
import NavBar from '../misc/navbar';


class AlbumShow extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.requestAlbum(this.props.albumId);
  }

  handleClick (e) {
    this.props.deleteAlbum(this.props.albumId).then( () => {
      this.props.history.push(`/users/${this.props.user.id}/albums`);
    })
  };


  render () {

    if (this.props.album) {
      return (
        <main className="album-show-wrapper">
          <NavBar/>
          <h1>{this.props.album.title}</h1>
          <h1>{this.props.album.description}</h1>
          <h1>{this.props.album.id}</h1>
            <br></br>
            <Link to={`/users/${this.props.userId}/albums/${this.props.album.id}/edit`}>Edit Album</Link>
            <button onClick={this.handleClick}>Delete this album?</button>
        </main>
      );
    } else {
      return "LOADING";
    }
}


}


export default AlbumShow;
