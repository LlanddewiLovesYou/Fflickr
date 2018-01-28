import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class CommentComponent extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <main className="comment-component">


        <div className='comment-user-wrapper'>
          <img src={window.staticImages.defaultAvatar}></img>
          <Link to={`/users/${this.props.comment.user_id}`} className='comment-username'>{this.props.user.username}</Link>
        </div>



        <div className='comment-body'>{this.props.comment.body}</div>


        <div className='comment-action-links'>
          <Link to='#' className='comment-edit'>Edit</Link>
          <Link to='#' className="comment-delete">Delete</Link>
        </div>



      </main>
    )
  }

}

export default CommentComponent
