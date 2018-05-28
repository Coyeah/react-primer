// counting.js
import React, { Component } from 'react';
import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import * as ItemsActions from '../actions/';
import { connect } from 'react-redux';

// console.log(ItemsActions);

// export default connect(state => ({
//   sum: state.sum
// }), dispatch => ({
//   actions: bindActionCreators(ItemsActions, dispatch)
// }))(Counter)

const mapStateToProps = state => ({
  sum: state.counter.sum,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ItemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)