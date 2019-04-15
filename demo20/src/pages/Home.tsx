import React from 'react';
import {Button} from 'antd';
import {observer, inject} from 'mobx-react'
import {TodoItem} from '@/stores/Todo';

@inject('todoStore')
@observer
class Home extends React.Component {
  render() {
    console.log(this.props.todoStore.list.map(value => value));
    return (
      <div>
        <div>
          {this.props.todoStore.list.map((value, key) => (
            <p key={key}>{value.content}</p>
          ))}
        </div>
        <Button onClick={() => {this.props.todoStore.list.push(new TodoItem({
          content: '新待办事项',
          status: 0
        }))}}>添加</Button>
      </div>
    )
  }
}

export default Home;
