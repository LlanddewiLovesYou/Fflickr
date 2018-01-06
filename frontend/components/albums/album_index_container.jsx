import React from "react";
import {connect} from 'react-redux';
import AlbumIndex from '../user_show/album_index';
import {receiveUser} from '../../actions/user_actions';


const getAlbumsByUser = (state, user) => {
  if (user) {
    return user.album_ids.map( id => state.albums[id]);
  }
};


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    albums: getAlbumsByUser(state, state.users[ownProps.match.params.userId])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveUser: (id) => dispatch(receiveUser(id)),
    deleteAlbum: (id) => dispatch(deleteAlbum(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
