import React from 'react';
import {Link, withRouter} from 'react-router-dom';



class CommentForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {body: '', photo_id: '', user_id: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault();
    this.state.user_id = this.props.userId
    this.state.photo_id = this.props.photoId
    const comment = this.state;
    this.props.createComment(comment)
    this.setState({body: ''})
    // this.props.receiveComment(comment.id)
  }

  update(e) {
    return (e) => this.setState({
      body: e.currentTarget.value
    });
  }



  render () {
    return (
      <main className="comment-form-wrapper">
        <div className='comments-head'>Leave a Comment:</div>
        <form onSubmit={this.handleSubmit}>
          <input  value={this.state.body} className='comment-input' type='text' placeholder='Comment' onChange={this.update('body')}></input>
          <button className="comment-button" type='submit' value='Add Comment'>Add Comment</button>
        </form>
      </main>
    )
  }


}

export default CommentForm;
