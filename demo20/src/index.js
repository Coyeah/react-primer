import React from 'react';
import {render} from 'react-dom';
import {Store} from './store';
import ChildrenContextType from './contextType';
import ChildrenConsumer from './consumer';
class App extends React.Component {
  render() {
    return (
      <Store.Provider value={{user: 'coyeah'}}>
        <ChildrenContextType />
        <ChildrenConsumer />
      </Store.Provider>
    )
  }
}

render(<App />, document.getElementById('root'));
