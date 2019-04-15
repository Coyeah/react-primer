if (process.env.NODE_ENV === 'development' && ENV_MOCK) {
  // require('../mock/example.js');
}

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';
import Router from './Router';
import todoStore from './stores/Todo';

let store = {
  todoStore
}

const App: React.FC = (props): React.ReactElement => {
  return (
    <Provider {...store}>
      <Router />
    </Provider>
  )
}

render(
  <App />,
  document.getElementById('root')
);
