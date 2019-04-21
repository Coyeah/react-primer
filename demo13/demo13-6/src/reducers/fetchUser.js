import {FETCH_GITHUB_USER_SAVE} from '../actions/';

const initialState = {
  user: {},
}

const fetchUser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_USER_SAVE:
      return {
        user: action.data,
      }
    default:
      return state
  }
}

export default fetchUser;
