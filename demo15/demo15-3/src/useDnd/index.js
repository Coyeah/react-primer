import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Drag from './Drag';
import Drop from './Drop';
import Effect from './Effect';

/**
 * 
 * @param {Array} initData 初始化数据源
 * @param {ReactComponent} Wrapper React 组件，用于封装每个 Item
 * @param {boolean} isOrder 拖拽是插入，亦或直接替换
 */
const useDnd = (initData = [], Wrapper, isOrder = false) => {
  const [type] = useState(Symbol('useDnd-item-type'));
  if (!Array.isArray(initData)) {
    console.warn('useDnd: The initialization data must be an array.')
    initData = [initData];
  }
  const [data, setData] = useState([...initData]);
  const onDnd = useCallback((dragTarget, dropTarget) => {
    if (dragTarget == dropTarget) return;
    let tempData = [...data];
    if (!!isOrder) {
      if (dragTarget > dropTarget) {    // 从后往前移动
        tempData.splice(dropTarget, 0, tempData.splice(dragTarget, 1).pop());
      } else {                          // 从前往后移动
        tempData.splice(dropTarget, 0, tempData.splice(dragTarget, 1).pop());
      }
    } else {
      let temp = tempData[dragTarget];
      tempData[dragTarget] = tempData[dropTarget];
      tempData[dropTarget] = temp;
    }
    setData(tempData);
  }, [data]);

  const childrenRender = useCallback((data) => {
    return data.map((value, index) => {
      return (
        <Drag index={index} key={index} type={type}>
          <Drop onDnd={onDnd}>
            <Effect isOrder={isOrder}>
              <Wrapper {...value} />
            </Effect>
          </Drop>
        </Drag>
      )
    })
  }, [onDnd]);

  const TargetComponent = useCallback((props) => {
    return (
      <DndProvider backend={HTML5Backend}>
        <div {...props}>
          {childrenRender(data)}
        </div>
      </DndProvider>
    )
  }, [data]);
  return [TargetComponent, data];
}

export default useDnd;