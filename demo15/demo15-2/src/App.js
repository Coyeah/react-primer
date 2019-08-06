import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CardList from './components/CardList';
import './App.css';
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <CardList />
    </DndProvider>
  );
}

export default App;