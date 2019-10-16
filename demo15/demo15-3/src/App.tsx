import React from 'react';
import CardList from './components/CardList';
import CardListO from './components/CardListO';
import './App.css';
function App() {
  return (
    <div style={{display: 'flex', padding: 30}}>
      <CardList />
      <CardListO />
    </div>
  );
}

export default App;