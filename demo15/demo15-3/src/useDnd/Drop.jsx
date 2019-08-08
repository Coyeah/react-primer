import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const Drop = props => {
  const { index, type, drag = {}, onDnd, onHover, children, ...restProps } = props;
  const [{ isOver, canDrop, dropTarget }, drop] = useDrop({
    accept: type,
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
        drag, drop: { isOver, canDrop, dropTarget }, index, type
      }))}
    </div>
  )
}

export default Drop;