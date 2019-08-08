import React, { useMemo, useEffect } from 'react';

const initStyle = {
  width: 'fit-content',
  marginBottom: 10,
};

const Effect = props => {
  const {index, drag: {isDragging}, drop: {isOver, dropTarget}, isOrder, children} = props;
  const forChildren = { drop: props.drop, drag: props.drag, index };

  const orderStyle = useMemo(() => {
    if (!isOver || index === dropTarget.index) return {
      borderBottom: '3px dashed rgba(255,255,255,0)',
    };
    return {
      borderTop: index < dropTarget.index ? '3px dashed gray' : '',
      borderBottom: index > dropTarget.index ? '3px dashed gray' : ''
    }
  }, [isOver, dropTarget])
  const replaceStyle = useMemo(() => ({
    boxShadow: isOver ? '0px 0px 5px gray' : '',
  }), [isOver]);

  const style = isOrder ? orderStyle : replaceStyle;

  return (
    <div style={{
      ...initStyle,
      ...style,
      opacity: isDragging ? 0.2 : 1,
    }}>
      {React.Children.map(children, child => React.cloneElement(child, {
        ...forChildren
      }))}
    </div>
  )
};

export default Effect;