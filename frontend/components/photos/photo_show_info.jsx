import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';


class PhotoShowInfo extends React.Component {


  componentDidMount () {
    if (this.props.user === undefined)
    this.props.receiveUser(ownProps.match.params.userId);
    }

  render () {
  return (
    <main className='photo-info-wrapper'>
      <div className='photo-info-title'>{this.props.photo.title}</div>
      <div className='photo-info-caption'>{this.props.photo.caption}</div>
      <div className='photo-info-user'>{this.props.user.username}</div>
    </main>
  );
}

}






const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.photos[ownProps.match.params.photoId],
    user: state.users[ownProps.match.params.userId],
    photoId: ownProps.match.params.photoId,
    userId: ownProps.match.params.userId
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




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShowInfo));
