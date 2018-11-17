import React from 'react';

const isEmpty = (prop) => {
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
};

const withLoadingHoC = (loadingProp) => (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return isEmpty(this.props[loadingProp]) ?
      <div className='loading' /> :
      <WrappedComponent {this.props} />
    }
  }
};
