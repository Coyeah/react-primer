import React from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { observable, computed, action } from 'mobx';

class Todo {
  id = Math.random();
  @observable title = '';
  @observable finished = false;
  constructor(title) {
    this.title = title;
  }
}

class TodoList {
  @observable todos = [];
  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(value => !value.finished).length;
  }
}

@observer
class TodoListView extends React.Component {
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
      <p>{todo.title}</p>
    </li>
  );
});

const store = new TodoList();
store.todos.push(new Todo("第一个待办事项"));
store.todos.push(new Todo("第二个待办事项"));

render(<TodoListView todoList={store}/>, document.getElementById("root"));
