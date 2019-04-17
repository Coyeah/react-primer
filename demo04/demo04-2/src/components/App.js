import React from 'react';
import Menu from './Menu';

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

export default App;