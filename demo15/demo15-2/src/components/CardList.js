import React from 'react';
import { useDrop } from 'react-dnd';

const CardList = (props) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'card',
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })

  console.log(isOver, canDrop);
  return (
    <div className='card' ref={drop}>
      {props.children}
    </div>
  )
}

export default CardList;