import React from "react";
import {connect} from 'react-redux';
import CommentComponent from './comment_component';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  return {
    photo: state.photos[ownProps.match.params.photoId],
    comments: state.photos.comment_ids
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    createComment: (comment) => {dispatch(createComment(comment))},
    updateComment: (comment) => {dispatch(updateComment(comment))},
    deleteComment: (commentId) => {dispatch(deleteComment(commentId))}

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentComponent))
