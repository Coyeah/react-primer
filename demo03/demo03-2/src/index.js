import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class Counter extends Component {
  render() {
    const { text, addNumHandler, subNumHandler } = this.props;
    return(
      <div>
        <p> {text} </p>
        <button onClick={addNumHandler}> + </button>
        <button onClick={subNumHandler}> - </button>
      </div>
    );
  }
}

const addNumber = {
  type: 'NUM_CHANGE_ADD',
}

const subNumber = {
  type: 'NUM_CHANGE_SUB',
}

const initialState = {
  text: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NUM_CHANGE_ADD': 
      return {
        text: ++state.text,
      }

    case 'NUM_CHANGE_SUB': 
      return {
        text: --state.text,
      }

    default:
      return initialState;
  }
}

let store = createStore(reducer);

function mapStateToProps(state) {
  return { 
    text: state.text, 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNumHandler: () => dispatch(addNumber),
    subNumHandler: () => dispatch(subNumber),
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)