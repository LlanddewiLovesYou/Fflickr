import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumComponent from '../albums/album_component';


class AlbumShow extends React.Component {

  componentDidMount() {
    this.props.requestAlbum(this.props.userId);
  }

  render () {
    if (this.props.album) {
      return (
        <main className="album-show-wrapper">
          <NavBar/>
            <br></br>
            <Link to='/'>To Splash Page</Link>
          <Footer />
        </main>
      );
    } else {
      return "LOADING";
    }
}


}


export default AlbumShow;
