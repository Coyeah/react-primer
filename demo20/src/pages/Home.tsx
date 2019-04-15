import React, {Fragment} from 'react';
import {
  Button, Card, Input,
  Row, Col,
  Icon, Divider, Popover
} from 'antd';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {observer, inject} from 'mobx-react'
import {TodoItem} from '@/stores/Todo';
import ListItem from '@/components/ListItem';

let routine = [
  '起床', '吃早饭', '坐公交车','完成上午任务', '吃午饭',
  '午休', '完成下午任务', '吃完饭', '玩游戏', '睡觉',
];

let statusStr = [
  '进行中', '已完成', '已取消', '紧急'
]


@inject('todoStore')
@observer
class Home extends React.Component {
  state = {
    inputValue: '',
  }

  addNewItem = () => {
    const {inputValue} = this.state;
    if (!inputValue) return null;
    this.setState({inputValue: ''}, () => {
      this.props.todoStore.list.push(new TodoItem({
        content: inputValue,
        status: 0
      }));
    });
  }

  addRoutineItem = () => {
    routine.forEach(value => {
      this.props.todoStore.list.push(new TodoItem({
        content: value,
        status: 0
      }));
    })
  }

  onStatusChange = (id, status) => {
    console.log(id);
    const {todoStore: {list}} = this.props;
    this.props.todoStore.list = list.map(value => {
      if (value.id === id) {
        value.status = status;
        value.updateTime = moment().format('YYYY-MM-DD HH:mm');
      }
      return value;
    })
  }

  listRender = () => {
    const {list} = this.props.todoStore;
    if (list.length === 0) {
      return (
        <Fragment>
          <h1 style={{textAlign: 'center'}}>空</h1>
        </Fragment>
      )
    } else {
      return this.props.todoStore.list.map((value, key) => (
        <ListItem
          key={key}
          id={value.id}
          onClick={() => this.onStatusChange(value.id, 1)}
          optionRender={value => (
            <Fragment>
              <Popover placement="left" content={
                <div>
                  <a onClick={() => this.onStatusChange(value.id, 1)}>完成</a>
                  <Divider type="vertical" />
                  <a onClick={() => this.onStatusChange(value.id, 2)}>取消</a>
                  <Divider type="vertical" />
                  <a onClick={() => this.onStatusChange(value.id, 3)}>紧急</a>
                  <Divider type="vertical" />
                  <a onClick={() => this.onStatusChange(value.id, 0)}>进行中</a>
                </div>
              } trigger="click">
                <Icon type="setting" />
              </Popover>
              <Divider type="vertical" />
              <Popover placement="right" content={
                <div>
                  <div>事项状态：{statusStr[value.status]}</div>
                  <div>创建时间：{value.createTime}</div>
                  <div>最后操作时间：{value.updateTime}</div>
                </div>
              }>
                <Icon type="info" />
              </Popover>
            </Fragment>
          )}
        />
      ))
    }
  }

  render() {
    return (
      <div>
        <Card hoverable>
          {this.listRender()}
        </Card>
        <Row style={{marginTop: 20}}>
          <Col span={15}>
            <Input
              value={this.state.inputValue}
              placeholder="请输入你的待办事项，亦或点击“日常计划”自动生成日常计划"
              onChange={e => this.setState({inputValue: e.target.value})}
            />
          </Col>
          <Col span={3}>
            <Button block onClick={this.addNewItem}>添加</Button>
          </Col>
          <Col span={3}>
            <Button block onClick={this.addRoutineItem}>日常计划</Button>
          </Col>
          <Col span={3}>
            <Button block ><Link to="/report">查看报告</Link></Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home;
