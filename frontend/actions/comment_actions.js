export const REMOVE_COMMENT = "REMOVE_COMMENT"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"

import * as CommentApi from '../util/comments_api_util';

export const createComment = (comment) => {
  return (dispatch) => {
    return CommentApi.createComment(comment).then((payload) => {
      dispatch({type: RECEIVE_COMMENT, comments: payload.comments, photo: payload.photo })
    })
  }
}

export const receiveComment = (id) => {
  return (dispatch) => {
    return CommentApi.fetchComment(id).then( (comment) => {
      dispatch({type: RECEIVE_COMMENT, comment})
    })
  }
}

export const updateComment = (comment) => {
  return (dispatch) => {
    return CommentApi.updateComment(comment).then((payload) => {
      dispatch({type: RECEIVE_COMMENT, comment: payload.comment })
    })
  }
}

export const deleteComment = (commentId) => {
  debugger
  return (dispatch) => {
    return CommentApi.deleteComment(commentId).then((payload) => {
      dispatch({type: REMOVE_COMMENT, commentId, comments: payload.comments, photo: payload.photo})
    })
  }
}
