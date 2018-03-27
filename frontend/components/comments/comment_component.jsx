import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createComment, updateComment, deleteComment} from '../../actions/comment_actions'


class CommentComponent extends React.Component {

  constructor(props) {
    super(props)
    this.deleteClick = this.deleteClick.bind(this)

    // this.props.deleteComment = this.props.deleteComment.bind(this)
  }

  deleteClick(e) {
    e.preventDefault()
    this.props.deleteComment(this.props.comment.id)
    delete this.props.comments[this.props.comment.id]

  }


  render() {
    if (this.props.comment.user_id === currentUser.id) {


    return (
      <main className="comment-component">


        <div className='comment-user-wrapper'>
          <img src={window.staticImages.defaultAvatar}></img>
          <Link to={`/users/${this.props.comment.user_id}`} className='comment-username'>{this.props.user.username}</Link>
        </div>



        <div className='comment-action-links'>
          <div className='comment-body'>{this.props.comment.body}</div>
          <button onClick={this.deleteClick} ref='deleteButton'className="comment-delete">Delete</button>
        </div>
      </main>
    )
      } else {
        return (
          <main className="comment-component">


          <div className='comment-user-wrapper'>
            <img src={window.staticImages.defaultAvatar}></img>
            <Link to={`/users/${this.props.comment.user_id}`} className='comment-username'>{this.props.user.username}</Link>

          </div>



          <div className='comment-body'>{this.props.comment.body}</div>
        </main>

      )

      }



  }

}
// <Link to='#' className='comment-edit'>Edit</Link>

export default CommentComponent
