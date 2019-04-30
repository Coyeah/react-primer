import React, {createContext, useContext, useReducer} from 'react';

let Store = null;
let Provider = props => (
  <div>
    {props.children}
  </div>
);

const createStore = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  Store = createContext({
    store: state,
    dispatch,
  });
  Provider = Store.Provider;
  return {
    store: state,
    dispatch,
  };
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

export default Provider;

export {
  createStore,
  connect
};
