import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Menu from './components/Menu';
import Home from './components/Home';
import Story from './components/Story';
import Travel from './components/Travel';


class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='/Story' component={Story} />
      <Route path='/Travel' component={Travel} />
    </Route>
  </Router>
), document.body);