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
}

export default new TodoStore();
