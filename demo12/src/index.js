import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { HashRouter, Route, IndexRoute } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Story from './components/Story';
import Travel from './components/Travel';
import Visual from './components/Visual';

class AppRouter extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <App>
          <Route key='visual' path='/Visual' component={Visual} />
          <Route key='home' path='/Home' component={Home} />
          <Route key='story' path='/Story' component={Story} />
          <Route key='travel' path='/Travel' component={Travel} />
        </App>
      </HashRouter>
    );
  }
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));
