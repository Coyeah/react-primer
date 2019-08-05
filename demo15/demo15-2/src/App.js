import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CardList from './components/CardList';
import CardItem from './components/CardItem';
import './App.css';

const list = [{ //定义卡片内容
  title:"first Card",
  id:1,
  content:"this is first Card"
},{
  title:"second Card",
  id:2,
  content:"this is second Card"
},{
  title:"Third Card",
  id:3,
  content:"this is Third Card"
}];

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <CardList>
        {list.map((item, index) => (
          <CardItem
            key={item.id}
            title={item.title}
            content={item.content}
            index={index}
          />
        ))}
      </CardList>
    </DndProvider>
  );
}

export default App;