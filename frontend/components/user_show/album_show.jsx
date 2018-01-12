import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumComponent from '../albums/album_component';
import NavBar from '../misc/navbar';
import PhotoShowMounting from '../photos/photo_show_mounting';


class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { display_id: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.clickRight = this.clickRight.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
  }

  componentDidMount() {
    this.props.requestAlbum(this.props.albumId);
  }

  handleClick (e) {
    this.props.deleteAlbum(this.props.albumId).then( () => {
      this.props.history.push(`/users/${this.props.user.id}/albums`);
    });
  }

  clickRight() {
    let newIndex = this.state.display_id + 1;
    if (newIndex >= this.props.photos.length) {
      newIndex = 0;
    }
    this.setState({display_id: newIndex});
  }

  clickLeft() {
    let newIndex = this.state.display_id - 1;
    if (newIndex < 0) {
      newIndex = this.props.photos.length - 1;
    }
    this.setState({display_id: newIndex});
  }

  render () {

    if (this.props.album) {
      return (
        <main className="album-show-page">
          <NavBar/>
            <div className="album-show-mounting">
              <div className='back-to-albums'>
                <Link to={`/users/${this.props.userId}/albums`}><img src={window.staticImages.leftArrow}/>Back to {this.props.user.username}s Albums</Link>
              </div>
              <PhotoShowMounting
                photo={this.props.photos[this.state.display_id]}
                clickLeft={this.clickLeft}
                clickRight={this.clickRight}
                />
            </div>
            <div className="album-show-wrapper">
              <h1 className="album-show-title">{this.props.album.title}</h1>
              <h1 className="album-show-description">{this.props.album.caption}</h1>
              <h1 className="album-show-description">{this.props.album.description}</h1>
              <h1 className="album-show-description">{this.props.user.username}</h1>
                <div className="album-show-buttons">
                  <Link to={`/users/${this.props.userId}/albums/${this.props.album.id}/edit`}>Edit Album</Link>
                  <button className='album-delete-button' onClick={this.handleClick}>Delete This Album?</button>
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
