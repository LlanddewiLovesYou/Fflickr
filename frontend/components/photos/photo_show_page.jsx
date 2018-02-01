import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoShowMountingContainer from './photo_show_mounting_container';
import NavBar from '../misc/navbar';
import PhotoShowInfo from './photo_show_info';
import CommentSection from '../comments/comment_section_container'



 class PhotoShowPage extends React.Component {

   constructor(props) {
     super(props);
   }

   componentDidMount() {
     this.props.requestPhoto(this.props.match.params.photoId);
   }

  render () {

    if (this.props.photo) {
    return (
      <div>
        <NavBar/>
        <PhotoShowMountingContainer photo={this.props.photo}/>
        <br></br>
        <Link to={`/users/${this.props.userId}/photos`} className='photostream-return-link'><img src={window.staticImages.leftArrowBlack}/>Back to {this.props.user.username}s Photostream</Link>
        <PhotoShowInfo/>
        <CommentSection/>
        
      </div>
    );
  } else {
    return "LOADING";
  }
}
}



export default withRouter(PhotoShowPage);
