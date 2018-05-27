// App.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNumber, subNumber } from '../actions';

import Counter from '../components/Counter';

class App extends Component {
  render() {
    return(
      <div>
        <Counter text={this.props.text} addNumber={this.props.addNumHandler} subNumber={this.props.addNumHandler} />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { 
//     text: state.text, 
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(NumActions, dispatch),
//   }
// }

export default connect(state => ({
  text: state.text,
}), dispatch => ({
  addNumHandler: () => dispatch(addNumber),
  subNumHandler: () => dispatch(subNumber),
}))(App)