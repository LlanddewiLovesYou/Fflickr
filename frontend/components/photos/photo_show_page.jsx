import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoShowMounting from './photo_show_page';


 class PhotoShowPage extends React.Component {

   constructor(props) {
     super(props);
   }

  render () {
    return (
      <div>
        <NavBar/>
        <PhotoShowMounting/>
        <PhotoShowInfo/>
      </div>
    );
  }

 }



export default withRouter(PhotoShowPage);
