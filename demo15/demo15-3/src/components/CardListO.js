import React, { useState, useCallback } from 'react';
import CardItem from './CardItem';
import useDnd from '../useDnd';

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

const CardListO = (props) => {
  const [TargetComponent, data] = useDnd(defaultList, CardItem, true);
  return (
    <>
      <h3>拖拽方式：插入</h3>
      <TargetComponent className="card" />
    </>
  )
}

export default CardListO;