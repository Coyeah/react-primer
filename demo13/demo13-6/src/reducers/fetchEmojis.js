import {FETCH_EMOJIS_SAVE} from '../actions/';

const initialState = {
  emojis: {}
}

const fetchEmojis = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMOJIS_SAVE:
      return {
        emojis: action.data,
      }
    default:
      return state
  }
}

export default fetchEmojis;
