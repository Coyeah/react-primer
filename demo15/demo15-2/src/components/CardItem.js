import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Card } from 'antd';

const CardItem = (props) => {
  const [{isDragging, canDrag}, drag] = useDrag({
    item: { type: 'card', index: props.index },
    end: (item, monitor) => {
      // console.log('drag: in ', props.title, 'and data ', item);
    },
		collect: monitor => ({
      isDragging: monitor.isDragging(),
      canDrag: monitor.canDrag(),
		}),
  })
  // console.log('isDragging: ', isDragging);
  // console.log('canDrag: ', canDrag);
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'card',
    drop: (item, monitor) => {
      // console.log('drop: in ', props.title, 'and data ', item);
      item.index !== props.index && props.onDnd(item.index, props.index);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })
  // console.log('isOver: ', isOver);
  // console.log('canDrop: ', canDrop);

  return (
    <div ref={drop}>
      <div ref={drag}>
        <Card title={props.title} style={{ opacity: isDragging ? 0.2 : 1, width: 300 }}>
          <p>{props.content}</p>
        </Card>
      </div>
    </div>
  )
};

export default CardItem;