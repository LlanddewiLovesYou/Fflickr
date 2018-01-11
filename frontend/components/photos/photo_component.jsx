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
          <img className="index-photo" src={this.props.photo.photo_url}></img>

          <div>{this.props.photo.title}</div>
          <div>{this.props.photo.caption}</div>
          <br></br>
        </div>
      </main>
    );
  }
}



export default PhotoComponent;
