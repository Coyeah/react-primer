/*
 * @Author: ye.chen 
 * @Date: 2019-10-16 16:03:53 
 */
import React from 'react';
import { useDrop } from 'react-dnd';
import { IDndProps, IDropTarget } from './types';

const Drop: React.FC<IDndProps> = props => {
  const { index, type, drag = {}, onDnd, children, ...restProps } = props;
  const [{ isOver, canDrop, dropTarget }, drop] = useDrop({
    accept: type,
    drop: (item: IDropTarget, monitor) => {
      onDnd && onDnd(item.index, index);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      dropTarget: monitor.getItem()
    })
  });
  return (
    <div ref={drop} {...restProps}>
      {React.Children.map(children, child =>
        React.cloneElement(child as React.ReactElement<any>, {
          drag,
          drop: { isOver, canDrop, dropTarget },
          index,
          type
        })
      )}
    </div>
  )
}

export default Drop;
