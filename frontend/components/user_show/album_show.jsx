import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumComponent from '../albums/album_component';
import NavBar from '../misc/navbar';
import AlbumShowMounting from '../albums/album_show_mounting'


class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestAlbum(this.props.albumId);
  }

  handleClick (e) {
    this.props.deleteAlbum(this.props.albumId).then( () => {
      this.props.history.push(`/users/${this.props.user.id}/albums`);
    });
  }


  render () {

    if (this.props.album) {
      return (
        <main className="album-show-page">
          <NavBar/>
            <div className="album-show-mounting">
              <AlbumShowMounting/>
            </div>
            <div className="album-show-wrapper">
              <h1 className="album-show-title">{this.props.album.title}</h1>
              <h1 className="album-show-description">{this.props.album.description}</h1>
              <h1 className="album-show-description">{this.props.user.username}</h1>
                <div className="album-show-buttons">
                  <Link to={`/users/${this.props.userId}/albums/${this.props.album.id}/edit`}>Edit Album</Link>
                  <button className='album-delete-button' onClick={this.handleClick}>Delete this album?</button>
                </div>
            </div>

            <br></br>
        </main>
      );
    } else {
      return "LOADING";
    }
}


}


export default AlbumShow;
