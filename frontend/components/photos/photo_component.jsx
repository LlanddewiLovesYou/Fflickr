import React from "react";
import {connect} from 'react-redux';



class PhotoComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  render () {
    return (
      <main>
        <div>
          <div>Photo.photo</div>
          <div>{this.props.user.username}</div>
          <div>{this.props.title}</div>
          <div>{this.props.caption}</div>
          <br></br>
        </div>
      </main>
    );
  }
}



export default PhotoComponent;
