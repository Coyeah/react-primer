// configureStore.js
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// let buildStore = compose(applyMiddleware(thunk))(createStore);

// export default function configureStore(initialState) {
//   const store = buildStore(reducer, initialState);
//   return store;
// }

export default function configureStore(initialState) {
  return createStore(
    reducer,
    applyMiddleware(thunk)
  );
}