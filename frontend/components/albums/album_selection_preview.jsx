import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AlbumSelectionPreview extends React.Component {

  constructor(props) {
    super(props)

  }

  render () {
    <main>
      {this.props.selected.map((photoId) => {
        return <PhotoComponent classname="thumbnail" photo={state.photos.photoId}/>;
      })}
    </main>
  }

}//class AlbumSelectionPreview

const mapStateToProps = (state, ownProps) => {
  return {
    selected: state.selected
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
