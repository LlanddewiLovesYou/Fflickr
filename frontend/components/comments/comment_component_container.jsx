import React from "react";
import {connect} from 'react-redux';
import CommentComponent from './comment_component';
import {withRouter} from 'react-router-dom';
import {createComment, updateComment, deleteComment} from '../../actions/comment_actions'


const mapStateToProps = (state, ownProps) => {

  return {
    photo: state.photos[ownProps.match.params.photoId],
    comments: state.photos.comment_ids,
    users: state.users.user_ids
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    updateComment: (comment) => dispatch(updateComment(comment))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentComponent))
