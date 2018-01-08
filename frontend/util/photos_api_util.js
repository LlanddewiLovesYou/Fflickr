export const fetchPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/photo'
  });
};

export const fetchPhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photo/${id}`
  });
};

export const createPhoto = (photo) => {

  return $.ajax({
    method: 'POST',
    url: `api/photo`,
    data: {photo}
  });
};

export const updatePhoto = (photo) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photo/${photo.id}`,
    data: {photo}
  });
};

export const deletePhoto = (photoId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photo/${photoId}`
  });
};
