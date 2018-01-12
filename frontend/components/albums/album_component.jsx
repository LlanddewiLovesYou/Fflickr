import React from 'react';
import {Link} from 'react-router-dom';




const AlbumComponent = (props) => {
  let cover_photo = ''
  if (props.cover_photo) {
    cover_photo = props.cover_photo.photo_url
  }
  
  return (
    <main  className="album-component-wrapper">
      <img src={cover_photo}/>
      <div className='album-index-text'>
        <Link to={`albums/${props.album.id}`}>{props.album.title}</Link>
        <div className='album-index-description'>{props.album.description}</div>
      </div>
    </main>
  );
};

export default AlbumComponent;
