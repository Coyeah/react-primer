import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ACCEPTTYPE } from '.';

const Drop = props => {
  const { index, drag = {}, onDnd, onHover, children, ...restProps } = props;
  const isMe = useState(false);
  const [{ isOver, canDrop, dropTarget }, drop] = useDrop({
    accept: ACCEPTTYPE,
    drop: (item, monitor) => {
      onDnd && onDnd(item.index, index);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      dropTarget: monitor.getItem(),
    }),
  });
  return (
    <div ref={drop} {...restProps}>
      {React.Children.map(children, child => React.cloneElement(child, {
        drag, drop: { isOver, canDrop, dropTarget }, index
      }))}
    </div>
  )
}

export default Drop;