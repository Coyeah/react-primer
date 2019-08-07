import React, { useMemo, useEffect } from 'react';

const initStyle = {
  width: 'fit-content',
  marginBottom: 10
};

const Effect = props => {
  const {index, drag: {isDragging}, drop: {isOver, dropTarget}, isOrder} = props;

  const orderStyle = useMemo(() => {
    if (!isOver || index === dropTarget.index) return {};
    return {
      borderTop: index < dropTarget.index ? '3px dashed gray' : '',
      borderBottom: index > dropTarget.index ? '3px dashed gray' : ''
    }
  }, [isOver, dropTarget])
  const replaceStyle = useMemo(() => ({
    opacity: isDragging ? 0.2 : 1,
    boxShadow: isOver ? '0px 0px 5px gray' : '' 
  }), [isDragging, isOver]);

  const style = isOrder ? orderStyle : replaceStyle;

  return (
    <div style={{
      ...initStyle,
      ...style
    }}>
      {props.children}
    </div>
  )
};

export default Effect;