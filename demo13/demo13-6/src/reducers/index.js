import { combineReducers } from 'redux';
import fetchEmojis from './fetchEmojis';
import fetchUser from './fetchUser';

const rootReducer = combineReducers({
  fetchEmojis,
  fetchUser,
});

export default rootReducer;
