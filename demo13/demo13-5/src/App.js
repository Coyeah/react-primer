import React from 'react';
import { bindActionCreators } from 'redux';
import {increment, incrementIfOdd} from './configureStore';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const {counter, actions: {increment, incrementIfOdd}} = this.props;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={incrementIfOdd}>increment if odd</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({increment, incrementIfOdd}, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
