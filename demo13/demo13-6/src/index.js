import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Emojis from './components/Emojis';
import GithubUser from './components/GithubUser';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GithubUser />
        <hr />
        <Emojis />
      </Provider>
    )
  }
}

render(<App />, document.getElementById('root'));
