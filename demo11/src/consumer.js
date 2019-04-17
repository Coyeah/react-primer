import React from 'react';
import {Store} from './store';

const Children = () => {
  return (
    <Store.Consumer>
      {({user}) => (
        <b>use consumer: {user}</b>
      )}
    </Store.Consumer>
  )
}

export default Children;
