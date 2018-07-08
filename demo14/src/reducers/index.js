
// actions
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const RECEIVE_POSTS = 'RECEIVE_POPTS';
export const FETCH_POSTS_ERROR = 'FETCH_USERS_ERROR';
export const BEGIN_GET_POSTS = 'BEGIN_GET_POSTS';
export const BEGIN_GET_USERS = 'BEGIN_GET_USERS';

// action creators
export function GET_USERS(users) {
  return { type: RECEIVE_USERS, users }
}

export function BEGIN_USERS_GET() {
  return { type: BEGIN_GET_USERS }
}

export function GET_USERS_ERROR(error) {
  return { type: FETCH_USERS_ERROR, error }
}

export function GET_POSTS(posts) {
  return { type: RECEIVE_POSTS, posts}
}

export function BEGIN_POSTS_GET() {
  return { type: BEGIN_GET_POSTS }
}

export function GET_POSTS_ERROR(error) {
  return { type: FETCH_POSTS_ERROR, error }
}


// reducer
const initialState = {
  fetched: false,
  users: [
    {
      key: 1,
      id: 1,
      name: 'coyeah',
      email: 'coyeah@gmail.com'
    },
  ],
  posts: [
    {
      key: 1,
      id: 1,
      title: 'React & Redux'
    },
  ],
  error: null
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_ERROR: {
      return {
        ...state,
        error: action.error
      }
      break;
    }
    case RECEIVE_USERS: {
      return {
        ...state,
        fetched: true,
        users: action.users
      }
      break;
    }
    case FETCH_POSTS_ERROR: {
      return {
        ...state,
        error: action.error
      }
      break;
    }
    case RECEIVE_POSTS: {
      return {
        ...state,
        fetched: true,
        posts: action.posts
      }
      break;
    }
  }
  return state;
}


export default appReducer