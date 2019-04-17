import React from 'react';
import { observer } from 'mobx-react';
import { observable, computed, action } from 'mobx';

import {Todo} from './store.jsx';

// class Todo {
//   id = Math.random();
//   @observable title = '';
//   @observable finished = false;
//   constructor(title) {
//     this.title = title;
//   }
// }
//
// class TodoList {
//   @observable todos = [];
//   @computed
//   get unfinishedTodoCount() {
//     return this.todos.filter(value => !value.finished).length;
//   }
// }

@observer
class TodoListView extends React.Component {
  handleClick = () => {
    this.props.todoList.addItem(new Todo(`${Date.now()}待办事项`));
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.props.todoList.todos.map(value => (
              <TodoView todo={value} key={value.id} />
            ))
          }
        </ul>
        <button onClick={this.handleClick}>ADD</button>
        <p>剩余：{this.props.todoList.unfinishedTodoCount}</p>
      </div>
    )
  }
}

const TodoView = observer(({todo}) => {
  const handleClick = action(() => { todo.finished = !todo.finished });
  return(
    <li>
      <input type="checkbox" defaultChecked={todo.finished} onClick={handleClick} />
      <span style={{ textDecoration: todo.finished ? 'line-through' : 'none' }}>{todo.title}</span>
    </li>
  );
});

// const store = new TodoList();

// export const list = store;

export default TodoListView;

// render(<TodoListView todoList={store}/>, document.getElementById("root"));
