import React, {createContext, useContext, useReducer} from 'react';

let Store = null;

const createStore = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  Store = createContext({
    store: state,
    dispatch,
  });
  return {
    store: {
      store: state,
      dispatch,
    },
    Provider: Store.Provider,
  }
}

const connect = (WrappedComponent) => {
  return props => {
    const store = useContext(Store);
    return (
      <>
        <WrappedComponent {...store} {...props} />
      </>
    )
  }
}

export {
  createStore,
  connect
};
