import React from 'react';
import { useDrag } from 'react-dnd';

const Drag = props => {
  const { index, type, drop = {}, children, ...restProps } = props;
  const [{ isDragging, canDrag }, drag] = useDrag({
    item: { type: type, index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      canDrag: !!monitor.canDrag(),
    })
  });
  return (
    <div ref={drag} {...restProps}>
      {React.Children.map(children, child => React.cloneElement(child, {
        drag: { isDragging, canDrag }, drop, index, type
      }))}
    </div>
  )
}

export default Drag;