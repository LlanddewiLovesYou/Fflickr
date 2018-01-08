import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class PhotoShowMounting extends React.Component {

  constructor (props) {
    super(props);
    this.state = {displayed_photo: null};
  }

  render () {
    return (
      <main className='album-show-mounting-component'>
            <div className="photo-show-area">PHOTO AREA</div>
        <img src={window.staticImages.rightChevron}></img>
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
    updatePhoto: (id) => dispatch(updatePhoto(id))
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(PhotoShowMounting);
