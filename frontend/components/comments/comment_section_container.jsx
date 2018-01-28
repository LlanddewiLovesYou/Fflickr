import React from "react";
import {connect} from 'react-redux';
import CommentSection from './comment_section';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const photo = state.photos[ownProps.match.params.photoId]
  const comments = photo.comment_ids.map((id) => {
    return state.comments[id]
  })
  const users = comments.map((comment) => {
    return state.users[comment.user_id]
  })
  return {
    photo,
    comments,
    users
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    createComment: (comment) => {dispatch(createComment(comment))},
    updateComment: (comment) => {dispatch(updateComment(comment))},
    deleteComment: (commentId) => {dispatch(deleteComment(commentId))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentSection))
