import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import PhotoComponent from "../photos/photo_component"

class AlbumSelectionPreview extends React.Component {

  constructor(props) {
    super(props)

  }

  render () {
    return (
      <main className="album-preview">
        {this.props.selected.map((photoId) => {
          return <PhotoComponent classname="thumbnail" photo={this.props.selected.photoId}/>;
        })}
      </main>
    )
  }

}//class AlbumSelectionPreview

const mapStateToProps = (state, ownProps) => {
  return {
    selected: state.photos.selected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPhoto: (id) => dispatch(requestPhoto(id)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    updatePhoto: (id) => dispatch(updatePhoto(id)),
    receiveUser: (id) => dispatch(receiveUser(id))
  };
};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumSelectionPreview));
