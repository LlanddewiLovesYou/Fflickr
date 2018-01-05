import React from 'react';
import {Link} from 'react-router-dom';




const AlbumIndex = (props) => {
  return (
    <main className="album-index-wrapper">
      This is the AlbumIndex (no albums yet)
      <Link to='albums/new' className='new-album-button'>Create New Album</Link>
      <br></br>
      <Link to='/'>To Splash Page</Link>
    </main>
  );
};

export default AlbumIndex;
