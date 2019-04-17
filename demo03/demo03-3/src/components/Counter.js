// Counter.js

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    const { addCount, subCount } = this.props.actions;

    return (
      <div>
        <h1>{this.props.sum}</h1>
        <button onClick={addCount}> + </button>
        <button onClick={subCount}> - </button>
      </div>
    );
  }
}

export default Counter;