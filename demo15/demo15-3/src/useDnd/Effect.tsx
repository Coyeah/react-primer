/*
 * @Author: ye.chen 
 * @Date: 2019-10-16 16:31:26 
 */
import React, { useMemo } from 'react';
import { IDndProps } from './types';

const initStyle = {
  width: '100%',
  marginBottom: 10
};

const Effect: React.FC<IDndProps> = props => {
  const {
    index,
    drag,
    // drag: { isDragging },
    drop,
    // drop: { isOver, dropTarget },
    isOrder,
    children
  } = props;

  const isDragging = drag && drag.isDragging;
  const isOver = drop && drop.isOver;
  const dropTarget = drop && drop.dropTarget;

  const orderStyle = useMemo(() => {
    if (!dropTarget) return {};
    if (!isOver || index === dropTarget.index)
      return {
        borderBottom: '3px dashed rgba(255,255,255,0)'
      };
    return {
      borderTop: index < dropTarget.index ? '3px dashed gray' : '',
      borderBottom: index > dropTarget.index ? '3px dashed gray' : ''
    };
  }, [isOver, dropTarget]);
  const replaceStyle = useMemo(
    () => ({
      boxShadow: isOver ? '0px 0px 3px gray' : ''
    }),
    [isOver]
  );

  const style = isOrder ? orderStyle : replaceStyle;
  const cx = `dnd-usednd-item dnd-usednd-item-${index}`;
  return (
    <div
      className={cx}
      style={{
        ...initStyle,
        ...style,
        opacity: isDragging ? 0.2 : 1
      }}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child as React.ReactElement<any>, {
          drag,
          drop,
          index
        })
      )}
    </div>
  );
};

export default Effect;
