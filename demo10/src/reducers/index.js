import { NUM_CHANGE_ADD, NUM_CHANGE_SUB } from '../constants/actionTypes';
import { combineReducers  } from 'redux';

const initialState = {
  text: 0,
}

function counting(state = initialState, action) {
  switch (action.type) {
    case NUM_CHANGE_ADD:
      return {
        text: ++state.text,
      }
    case NUM_CHANGE_SUB:
      return {
        text: --state.text,
      }
    default:
      return initialState;
  }
}

export default counting;