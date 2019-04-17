if (process.env.NODE_ENV === 'development' && ENV_MOCK) {
  // require('../mock/example.js');
}

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';
import { useObservable } from 'mobx-react-lite'
import Router from './Router';
import todoStore from './stores/Todo';
import Context from './stores/index';

let store = {
  todoStore
}

const App: React.FC = (props): React.ReactElement => {
  return (
    <Provider {...store}>
      <Context.Provider value={{...store}}>
        <Router />
      </Context.Provider>
    </Provider>
  )
}

render(
  <App />,
  document.getElementById('root')
);
