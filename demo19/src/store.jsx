import { observable, computed, action } from 'mobx';

export class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;
  constructor(title) {
    this.title = title;
  }
}

export class TodoList {
  @observable todos = [];
  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(value => !value.finished).length
  }
}

export class Count {
  @observable number = 0;
}
