import React, {useState} from 'react';
import {render} from 'react-dom';

import Provider, {createStore} from './components/FakeRedux';
import {reducer, initialState} from './pages/Counter/reducer';
import PageSize from './pages/PageSize/';
import Counter from './pages/Counter/';
import ListenSize from './pages/ListenSize';

const routeMap = [
  {
    name: '监听组件宽高',
    component: () => <ListenSize />,
  }, {
    name: '实现简易 Redux',
    component: () => <Counter />,
  }, {
    name: '监听窗口大小',
    component: () => <PageSize />,
  }
];

const App = (props) => {
  let store = createStore(reducer, initialState);
  let [route, setRoute] = useState(0);
  let component = routeMap[route].component;
  return (
    <Provider value={store}>
      <div style={{padding: 20}}>
        {routeMap.map((value, index) => (
          <span key={index} style={{marginRight: 20, cursor: 'pointer'}} onClick={() => setRoute(index)}># {value.name}</span>
        ))}
      </div>
      <div style={{borderTop: '1px solid #888', padding: 20}}>
        {component()}
      </div>
    </Provider>
  )
}

render(<App />, document.getElementById('root'));
