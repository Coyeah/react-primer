import React from 'react';
import {Store} from './store';

class Children extends React.Component {
  render() {
    return (
      <div>use contextType: {this.context.user}</div>
    )
  }
}
Children.contextType = Store;

export default Children;
