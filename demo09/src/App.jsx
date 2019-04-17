import React from 'react';
import ScrollPos from './ScrollPos.jsx';

const style = {
  position: 'fixed',
  top: '0',
  left: '0',
  padding: '100px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#888',
}

export default class App extends React.Component {
  render() {
    return(
      <div style={{ height: '5000px' }}>
        <ScrollPos>
          {
            position => <div style={style}>{position}</div>
          }
        </ScrollPos>
      </div>
    )
  }
}
