import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoShowMounting from './photo_show_mounting';
import NavBar from '../misc/navbar';
import PhotoShowInfo from './photo_show_info';


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
        <PhotoShowMounting/>
        <PhotoShowInfo photo={this.props.photo}/>
      </div>
    );
  } else {
    return "LOADING";
  }
}
}



export default withRouter(PhotoShowPage);
