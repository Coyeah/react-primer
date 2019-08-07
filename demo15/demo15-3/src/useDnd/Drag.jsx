import React from 'react';
import { useDrag } from 'react-dnd';
import { ACCEPTTYPE } from './index';

const Drag = props => {
  const { index, drop = {}, children, ...restProps } = props;
  const [{ isDragging, canDrag }, drag] = useDrag({
    item: { type: ACCEPTTYPE, index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      canDrag: !!monitor.canDrag(),
    })
  });
  return (
    <div ref={drag} {...restProps}>
      {React.Children.map(children, child => React.cloneElement(child, {
        drag: { isDragging, canDrag }, drop, index
      }))}
    </div>
  )
}

export default Drag;