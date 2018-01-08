import React from "react";
import {connect} from 'react-redux';


class PhotoIndex extends React.Component {

  render () {
    return (
      <main>
        {this.props.photos.map((photo) => {
          return <PhotoComponent photo={photo}/>;
        })}
      </main>
    );
  }
}



const getPhotosByUser = (state, user) => {
  if (user) {
    return user.photo_ids.map( id => state.photos[id]);
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    photos: getPhotosByUser(state, state.users[ownProps.match.params.userId]),
    user: state.users[ownProps.match.params.userId],
    photoId: ownProps.match.params.photoId,
    userId: ownProps.match.params.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPhoto: (id) => dispatch(requestPhoto(id)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    updatePhoto: (id) => dispatch(updatePhoto(id))
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
