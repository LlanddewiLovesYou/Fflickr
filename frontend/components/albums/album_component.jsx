import React from 'react';
import {Link} from 'react-router-dom';




const AlbumComponent = (props) => {
  return (
    <main className="album-component-wrapper">
      <Link to={`albums/${props.album.id}`}>{props.album.title}</Link>
      {props.album.description}
    </main>
  );
};

export default AlbumComponent;
