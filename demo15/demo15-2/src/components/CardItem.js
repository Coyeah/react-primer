import React from 'react';
import { useDrag } from 'react-dnd';
import { Card } from 'antd';

const CardItem = (props) => {
  const [{isDragging}, drag] = useDrag({
    item: { type: 'card' },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  })

  return (
    <div ref={drag}>
      <Card title={props.title} style={{ opacity: isDragging ? 0.5 : 1, width: 300 }}>
        <p>{props.content}</p>
      </Card>
    </div>
  )
};

export default CardItem;