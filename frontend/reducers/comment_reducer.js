import merge from 'lodash/merge';
import {REMOVE_COMMENT} from '../actions/comment_actions';
import {RECEIVE_PHOTO} from '../actions/photo_actions';

const CommentsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_PHOTO:
      newState = merge({}, state, action.comments)
      return newState
    case REMOVE_COMMENT:
      newState = merge({}, state)
      delete newState[action.comment.id]
      return newState
    default:
      return state;
  }
}

export default CommentsReducer;
