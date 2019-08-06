import React, { useState, useCallback } from 'react';
import CardItem from './CardItem';

const defaultList = [{ //定义卡片内容
  title:"First Card",
  id: 1,
  content:"this is First Card"
},{
  title:"Second Card",
  id: 2,
  content:"this is Second Card"
},{
  title:"Third Card",
  id: 3,
  content:"this is Third Card"
}];

const CardList = (props) => {
  const [list, setList] = useState([...defaultList]);
  const dnd = useCallback((dragTarget, dropTarget) => {
    console.log(`for ${dragTarget} to ${dropTarget}`);
    let tempList = [...list];
    if (dragTarget > dropTarget) {    // 从后往前移动
      console.log(1);
      tempList.splice(dropTarget, 0, tempList.splice(dragTarget, 1).pop());
    } else {                          // 从前往后移动
      console.log(2);
      tempList.splice(dropTarget, 0, tempList.splice(dragTarget, 1).pop());
    }
    setList(tempList);
  }, [list]);
  return (
    <div className='card'>
      {list.map((item, index) => (
        <CardItem
          key={item.id}
          title={item.title}
          content={item.content}
          index={index}
          onDnd={dnd}
        />
      ))}
    </div>
  )
}

export default CardList;