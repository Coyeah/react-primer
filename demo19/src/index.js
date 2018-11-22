import React from 'react';
import {render} from 'react-dom';
import TodoListView from './TodoListView.jsx';
import CountView from './CountView.jsx';

import {Todo, TodoList, Count} from './store.jsx';

const todoStore = new TodoList();
const countStore = new Count();

class App extends React.Component {
  render() {
    return (
      <div>
        <CountView count={countStore} />
        <hr />
        <TodoListView todoList={todoStore} />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
