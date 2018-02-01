import React from 'react';
import {connect} from 'react-redux';
import CommentForm from './comment_form';
import {withRouter} from 'react-router-dom';
import {createComment, deleteComment, receiveComment} from '../../actions/comment_actions'



const mapStateToProps = (state, ownProps) => {

  return {
    photoId: ownProps.match.params.photoId,
    userId: state.session.currentUser.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    receiveComment: (comment) => dispatch(receiveComment(comment))
  }
}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm))

// import {createComment} from '../../actions/comment_actions';
// createComment: (comment) => dispatch(createComment(comment))
