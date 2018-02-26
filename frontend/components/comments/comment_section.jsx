import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CommentComponent from "./comment_component_container";
import CommentForm from "./comment_form_container";
import orderBy from "lodash/orderBy";
// import CommentSection from './comment_section_container'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const users = this.props.users;

    const comments = this.props.comments.map((comment, idx) => {
      if (comment) {
        return (
          <li>
            <CommentComponent
              key={comment.id}
              comment={comment}
              user={users[idx]}
            />
          </li>
        );
      }
    });

    const ordComments = orderBy(comments, "id");

    return (
      <main className="comment-section">
        <div className="comments-header">Comments:</div>
        <ol>{ordComments}</ol>
        <CommentForm />
      </main>
    );
  }
}

export default CommentSection;
