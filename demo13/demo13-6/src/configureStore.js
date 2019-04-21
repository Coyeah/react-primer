import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from './reducers/';
import rootEpic from './epics/';

const epicMiddleware = createEpicMiddleware();
const middlewares = [epicMiddleware, thunkMiddleware, loggerMiddleware];
const buildStore = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  const store = buildStore(rootReducer, initialState);
  epicMiddleware.run(rootEpic);
  return store;
}
