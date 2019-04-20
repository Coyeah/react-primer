import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './configureStore';
import AppComponent from './App';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppComponent />
      </Provider>
    )
  }
}

render(<App />, document.getElementById('root'));
