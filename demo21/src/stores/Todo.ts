import moment from 'moment';
import { observable, computed, action } from 'mobx';
import {generateUUID} from '@/utils';

const timeFormat = 'YYYY-MM-DD HH:mm';

interface ITodoItem {
  content: string,
  status: number,
}

export class TodoItem implements ITodoItem {
  id = generateUUID();
  createTime = moment().format(timeFormat);
  @observable updateTime = moment().format(timeFormat);
  @observable content = "";
  @observable status = 0;

  constructor({content, status}) {
    this.content = content;
    this.status = status;
  }
}

export class TodoStore {
  @observable list = [];

  @action.bound
  addItem(target) {
    this.list.push(target);
  }

  @action.bound
  statusChange(id, status) {
    this.list = this.list.map(value => {
      if (value.id === id) {
        value.status = status;
        value.updateTime = moment().format('YYYY-MM-DD HH:mm');
      }
      return value;
    });
  }

  @computed
  get getSucceed() {
    return this.list.filter(value => value.status === 1);
  }

  @computed
  get getUrgency() {
    return this.list.filter(value => value.status === 3);
  }
}

export default new TodoStore();
