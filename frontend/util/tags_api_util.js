
export const fetchTag = (tagname) => {
  return $.ajax({
    method: 'GET',
    url: `api/tags/${tagname}`
  })
}

export const createTag = (tagname, photo_id) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `api/tags/`,
    data: {tag: {tagname, photo_id}}
  })
}
