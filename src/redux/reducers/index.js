import { combineReducer } from 'redux';
import user from './userReducer';

const rootReducer = combineReducer({
  user,
});

export default rootReducer;
