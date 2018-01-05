import React from "react";
import {connect} from 'react-redux';
import AlbumIndex from '../user_show/album_index';

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    deleteAlbum: (id) => dispatch(deleteAlbum(id))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
