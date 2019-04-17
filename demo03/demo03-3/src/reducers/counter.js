// counter.js

const initialState = {
  sum: 0,
}

const counter = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_COUNT":
      return {
        sum: state.sum + 1
      }
      break;
    case "SUB_COUNT":
      return {
        sum: state.sum - 1
      }
      break;
    default:
      return state
  }
}

export default counter;