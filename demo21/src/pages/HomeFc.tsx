import React, {Fragment, useState, useContext} from 'react';
import {
  Button, Card, Input,
  Row, Col,
  Icon, Divider, Popover
} from 'antd';
import { observer, useObservable } from 'mobx-react-lite'
import moment from 'moment';
import Context from '@/stores/index';
import {TodoItem} from '@/stores/Todo';
import ListItem from '@/components/ListItem';

let routine = [
  '起床', '吃早饭', '坐公交车','完成上午任务', '吃午饭',
  '午休', '完成下午任务', '吃完饭', '玩游戏', '睡觉',
];

let statusStr = [
  '进行中', '已完成', '已取消', '紧急'
]

const Home: React.FC = (props): React.ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const {todoStore:{list, addItem, statusChange}} = useContext(Context);

  const addNewItem = () => {
    if (!inputValue) return null;
    addItem(new TodoItem({
      content: inputValue,
      status: 0
    }));
    setInputValue('');
  }

  const addRoutineItem = () => {
    routine.forEach(value => {
      addItem(new TodoItem({
        content: value,
        status: 0
      }));
    });
  }

  const onStatusChange = (id, status) => {
    statusChange(id, status)
  }

  const listRender = () => {
    if (list.length === 0) {
      return (
        <Fragment>
          <h1 style={{textAlign: 'center'}}>空</h1>
        </Fragment>
      )
    } else {
      return list.map((value, key) => (
        <ListItem
          key={key}
          id={value.id}
          onClick={() => onStatusChange(value.id, 1)}
          optionRender={value => (
            <Fragment>
              <Popover placement="left" content={
                <div>
                  <a onClick={() => onStatusChange(value.id, 1)}>完成</a>
                  <Divider type="vertical" />
                  <a onClick={() => onStatusChange(value.id, 2)}>取消</a>
                  <Divider type="vertical" />
                  <a onClick={() => onStatusChange(value.id, 3)}>紧急</a>
                  <Divider type="vertical" />
                  <a onClick={() => onStatusChange(value.id, 0)}>进行中</a>
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

  return (
    <div>
      <Card hoverable>
        {listRender()}
      </Card>
      <Row style={{marginTop: 20}}>
        <Col span={18}>
          <Input
            value={inputValue}
            placeholder="请输入你的待办事项，亦或点击“日常计划”自动生成日常计划"
            onChange={e => setInputValue(e.target.value)}
          />
        </Col>
        <Col span={3}>
          <Button block onClick={addNewItem}>添加</Button>
        </Col>
        <Col span={3}>
          <Button block onClick={addRoutineItem}>日常计划</Button>
        </Col>
      </Row>
    </div>
  )
}

export default observer(Home);
