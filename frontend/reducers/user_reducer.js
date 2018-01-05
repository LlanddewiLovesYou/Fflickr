import merge from 'lodash/merge';
import {RECEIVE_USER} from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      
      newState = merge({}, state, action.user);
      return newState;
    default:
      return state;
  }
};

export default AlbumsReducer;
