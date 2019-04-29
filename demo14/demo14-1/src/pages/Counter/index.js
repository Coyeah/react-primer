import React from 'react';
import {connect} from '../../components/FakeRedux';

const Counter = (props) => {
  const {store, dispatch} = props;
  return (
    <>
      <p>Count: {store.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>加</button>
      <button onClick={() => dispatch({type: 'decrement'})}>减</button>
    </>
  )
}

export default connect(Counter);
