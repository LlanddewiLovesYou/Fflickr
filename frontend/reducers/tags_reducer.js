import merge from 'lodash/merge';
import { RECEIVE_TAG } from '../actions/tags_actions'
import { RECEIVE_PHOTO } from '../actions/photo_actions'

const tagsReducer = (state = {}, action) => {
  let newState
  switch (action.type) {
    case RECEIVE_TAG:
      newState = merge({}, state, action.tag)
      return newState
    case RECEIVE_PHOTO:
      newState = merge({}, state, action.tags)
      return newState
    default:
      return state;
  }
}

export default tagsReducer
