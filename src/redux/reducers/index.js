import { combineReducers } from 'redux';
import user from './userReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  user, posts,
});

export default rootReducer;
