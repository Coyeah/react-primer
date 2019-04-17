import React from 'react';

export const dynamicWrapper = (fn: object) => {
  let WrapperComponent = React.lazy(fn);
  return () => <WrapperComponent />
}
