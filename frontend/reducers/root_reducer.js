import { combineReducers } from 'redux';

// import entities from './entities_reducer';
// import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import users from './user_reducer';
import albums from './albums_reducer';
import photos from './photo_reducer';
import comments from './comment_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  users,
  albums,
  photos,
  comments
});

export default rootReducer;
