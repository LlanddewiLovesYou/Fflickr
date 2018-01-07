import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumComponent from '../albums/album_component';


class AlbumIndex extends React.Component {

  componentDidMount() {
    this.props.receiveUser(this.props.userId);
  }

  render () {
    if (this.props.user) {
      return (
        <main className="album-index-wrapper">
          <ul>
          {this.props.albums.map((album) => {
            return <AlbumComponent album={album} />;
          })}
        </ul>
          <Link to={`/users/${this.props.user.id}/newalbum`} className='new-album-button'>Create New Album</Link>
          <br></br>
          <Link to='/'>To Splash Page</Link>
        </main>
      );
    } else {
      return "LOADING";
    }
}


};


export default AlbumIndex;
