import React from 'react';
import {Link} from 'react-router-dom';




const AlbumComponent = (props) => {
  return (
    <main className="album-component-wrapper">
      <Link to={`albums/${props.album.id}`}>{props.album.title}</Link>
      <div className='album-index-description'>{props.album.description}</div>
    </main>
  );
};

export default AlbumComponent;
