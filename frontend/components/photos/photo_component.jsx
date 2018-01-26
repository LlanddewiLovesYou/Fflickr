import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectPhoto} from '../../actions/photo_actions';



class PhotoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.selectClick = this.selectClick.bind(this)
    this.deleteClick = this.deleteClick.bind(this)
  }

  componentDidMount () {
    if(this.props.user === undefined){
      this.props.receiveUser(this.props.photo.user_id);
    } else if (this.props.photo === undefined) {
      this.props.receivePhoto(this.props.photoId)
    }

  }

  deleteClick (e) {
    this.props.deletePhoto(this.props.photoId).then( () => {
      this.props.history.push(`/users/${this.props.user.id}/photos`);
    });
  }

  selectClick (e) {
    dispatch(selectPhoto(this.props.photo.id))
  }

  render () {
    let username = "";
    if (this.props.user){
      username = this.props.user.username;
    }
    let componentClass = 'component-photo-wrapper'
    if (this.props.selected === 'true') {
      componentClass = 'selected-photo'
    }

    return (
      <main  className={componentClass} onClick={this.selectClick}>

        <div  className="component-photo">

          <img src={this.props.photo.photo_url} className="photo-show-area"/>

            <div className="photo-component-info">

              <img className="mini-avatar" src={window.staticImages.defaultAvatar}/>

              <Link to={`/users/${this.props.userId}/photos/${this.props.photo.id}/show`}>
                <div  className='full-caption'>
                  <span className="component-photo-title">{this.props.photo.title}</span>
                  <span className="component-photo-user">by {username}</span>
                  <a className='photo-delete-button' onClick={this.deleteClick}>x Delete</a>
                  <a className='photo-select-button' onClick={this.selectClick}>x Delete</a>
                </div>
              </Link>

            </div>

        </div>
      </main>
    );
  }
}



export default PhotoComponent;


// this.props.deletePhoto = this.props.deletePhoto.bind(this);
// this.handleClick = this.handleClick.bind(this);
