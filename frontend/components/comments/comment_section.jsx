import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CommentComponent from './comment_component'

class CommentSection extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
  const users = this.props.users
  const comments = this.props.comments.map((comment, idx) => {
      return <CommentComponent key={comment.id} comment={comment} user={users[idx]}/>
    })

    return (
      <main className="comment-section">
        <div className="comments-header">Comments:</div>
        {comments}
      </main>
    )
  }

}

export default CommentSection;
