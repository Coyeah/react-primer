import React, {useState} from 'react';
import {render} from 'react-dom';

import PageSize from './components/PageSize/';
import Store from './components/ContextApp/store';
import ContextApp from './components/ContextApp/';

const routeMap = [
  {
    name: '监听窗口大小',
    componet: () => <PageSize />,
  }, {
    name: 'useContext 的使用',
    componet: () => <ContextApp />,
  }
];

const App = (props) => {
  let [route, setRoute] = useState(0);
  let component = routeMap[route].componet;
  return (
    <Store.Provider value={{name: 'Coyeah', contact: 'https://github.com/Coyeah'}}>
      <div style={{padding: 20}}>
        {routeMap.map((value, index) => (
          <span key={index} style={{padding: 10, cursor: 'pointer'}} onClick={() => setRoute(index)}># {value.name}</span>
        ))}
      </div>
      <div style={{borderTop: '1px solid #888', padding: 20}}>
        {component()}
      </div>
    </Store.Provider>
  )
}

render(<App />, document.getElementById('root'));
