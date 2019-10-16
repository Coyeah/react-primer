/*
 * @Author: ye.chen 
 * @Date: 2019-10-16 15:48:48 
 */
import React from 'react';
import { useDrag } from 'react-dnd';
import { IDndProps } from './types';

const Drag: React.FC<IDndProps> = props => {
  const { index, type, drop = {}, children, ...restProps} = props;
  const [{ isDragging, canDrag }, drag] = useDrag({
    item: { type, index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      canDrag: !!monitor.canDrag()
    })
  });
  return (
    <div ref={drag} {...restProps}>
      {React.Children.map(children, child => 
        React.cloneElement(child as React.ReactElement<any>, {
          drag: { isDragging, canDrag },
          drop,
          index,
          type
        })
      )}
    </div>
  );
};

export default Drag;