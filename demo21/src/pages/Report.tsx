import React from 'react';
import { Alert } from 'antd';
import {observer, inject} from 'mobx-react';

@inject('todoStore')
@observer
class Report extends React.Component {
  render() {
    const {todoStore: {getSucceed, getUrgency, list}} = this.props;
    return (
      <div>
        <Alert message={`待办事项已完成：${getSucceed.length}/${list.length}`} type="success" />
        <Alert message={`仍有 ${list.length - getSucceed.length} 项任务未完成`} type="warning" />
        <Alert message={`还有 ${getUrgency.length} 项紧急事项待完成`} type="error" />
      </div>
    )
  }
}

export default Report;
