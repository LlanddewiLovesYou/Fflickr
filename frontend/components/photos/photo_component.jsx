import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



class PhotoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.props.deletePhoto = this.props.deletePhoto.bind(this);
  }

  componentDidMount () {
    if(this.props.user === undefined){
      this.props.receiveUser(this.props.photo.user_id);
    }
  
  }

  handleClick (e) {
    this.props.deletePhoto(this.props.photoId).then( () => {
      this.props.history.push(`/users/${this.props.user.id}/photos`);
    });
  }

  render () {
    let username = "";
    if (this.props.user){
      username = this.props.user.username;
    }
      debugger
    return (
      <main  className="component-photo-wrapper">
        <Link to={`/users/${this.props.userId}/photos/${this.props.photo.id}/show`}>
        <div  className="component-photo">
          <img src={this.props.photo.photo_url} className="photo-show-area"/>

              <div  className="photo-component-info">
                <span className="component-photo-user">{username}</span>
                <span className="component-photo-title">{this.props.photo.title}</span>
                <span className="component-photo-caption"> {this.props.photo.caption}</span>
                <a className='photo-delete-button' onClick={this.handleClick}>x Delete</a>
              </div>

        </div>
      </Link>
      </main>
    );
  }
}



export default PhotoComponent;
