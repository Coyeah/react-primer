// Counter.js

import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return(
      <div>
        <p> {this.props.text} </p>
        <button onClick={this.props.addNumber.bind(this)}> + </button>
        <button onClick={this.props.subNumber.bind(this)}> - </button>
      </div>
    );
  }
}

export default Counter;