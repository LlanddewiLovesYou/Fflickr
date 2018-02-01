

export const createComment = (comment) => {
  return $.ajax({
    method:'POST',
    url: `api/photos/${comment.photo_id}/comments`,
    data: {comment}
  })
}

export const fetchComment = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/comments/${id}`
  })
}

export const updateComment = (comment) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/comments/${comment.id}`,
    data: {comment}
  })
}

export const deleteComment = (commentId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${commentId}`
  })
}
