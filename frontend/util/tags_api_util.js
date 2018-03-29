
export const fetchTag = (tagname) => {
  return $.ajax({
    method: 'GET',
    url: `api/tags/${tagname}`
  })
}

export const createTag = (tagname, photo_id) => {
  return $.ajax({
    method: 'POST',
    url: `api/tags/`,
    data: {tag: {tagname, photo_id}}
  })
}

export const deleteTag = (tagname, photoId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tags/${tagname}`,
    data: {photoId}
  })
}
