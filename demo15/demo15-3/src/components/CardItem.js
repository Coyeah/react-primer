import React from 'react';
import { Card } from 'antd';

const CardItem = (props) => {
  // const {drop: {isOver, canDrop}, drag: {isDragging, canDrag}} = props;
  // console.log(props);
  return (
    <Card title={props.title} style={{ width: 300 }}>
      <p>{props.content}</p>
    </Card>
  )
};

export default CardItem;