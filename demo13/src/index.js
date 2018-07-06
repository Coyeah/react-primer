import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { HashRouter, Route } from 'react-router-dom';

import 'antd/dist/antd.min.css';

import appReducer from './reducers';
import rootSaga from './sagas';

import App from './components/App';
import Home from './components/Home';
import PostList from './components/PostList';
import UserList from './components/UserList';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware, logger];

const store = createStore(appReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

console.log(store.getState());

class AppRouter extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <App>
          <Route path='/Home' component={Home} />
          <Route path='/PostList' component={PostList} />
          <Route path='/UserList' component={UserList} />
        </App>
      </HashRouter>
    );
  }
}


ReactDOM.render(
<Provider store={store}>
  <AppRouter />
</Provider>
, document.body);