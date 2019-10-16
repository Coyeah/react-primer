/*
 * @Author: ye.chen 
 * @Date: 2019-10-16 15:21:53 
 */

import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Drag from './Drag';
import Drop from './Drop';
import Effect from './Effect';
import { IUseDndProps } from './types';

const useDnd: (params: IUseDndProps) => any[] = ({
  Component,
  initData = [],
  isOrder = false,
  handleChange
}) => {
  const [type] = useState(Symbol('USEDND-ITEM-TYPE'));
  const [data, setData] = useState([...initData]);

  const onDnd = useCallback((dragTarget: number, dropTarget: number) => {
    if (dragTarget === dropTarget) return;
    const tempData = [...data];
    if (isOrder) {
      const temp = tempData.slice(dragTarget).shift();
      if (temp) {
        tempData.splice(dragTarget, 1);
        tempData.splice(dropTarget, 0, temp);
      }
    } else {
      const temp = tempData[dragTarget];
      tempData[dragTarget] = tempData[dropTarget];
      tempData[dropTarget] = temp;
    }
    if (handleChange) {
      handleChange(tempData, () => {
        setData(tempData);
      });
    } else {
      setData(tempData);
    }
  }, [data]);

  const childrenRender = useCallback((items: object[]) => {
    return items.map((value: object, index: number) => {
      const key = `dnd-usednd-item-${index}`;
      return (
        <Drag index={index} key={key} type={type}>
          <Drop index={index} type={type} onDnd={onDnd}>
            <Effect index={index} type={type} isOrder={isOrder}>
              <Component {...value} />
            </Effect>
          </Drop>
        </Drag>
      );
    });
  }, [onDnd]);

  const DndComponent = useCallback(
    props => {
      return (
        <DndProvider backend={HTML5Backend}>
          <div className="dnd-usednd" {...props}>
            {childrenRender(data)}
          </div>
        </DndProvider>
      )
    },
    [data]
  );

  return [DndComponent, setData, data];
};

export default useDnd;