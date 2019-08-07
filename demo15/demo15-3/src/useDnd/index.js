import React, { useState, useCallback } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const ACCEPTTYPE = Symbol('useDnd-item-target');

const DragComponent = props => {
  const {index, drop = null, children} = props;
  const [{isDragging, canDrag}, drag] = useDrag({
    item: { type: ACCEPTTYPE, index },
    end: (item, monitor) => {
      // console.log('drag: in ', index, 'and data ', item);
    },
		collect: monitor => ({
      isDragging: monitor.isDragging(),
      canDrag: monitor.canDrag(),
		}),
  });

  return (
    <div ref={drag}>
      {React.Children.map(children, child => React.cloneElement(child, {
        drag: { isDragging, canDrag }, drop
      }))}
    </div>
  )
}

const DropComponent = props => {
  const {index, drag = null, onDnd, children} = props;
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ACCEPTTYPE,
    drop: (item, monitor) => {
      // console.log('drop: in ', index, 'and data ', item);
      onDnd(item.index, index);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  return (
    <div ref={drop}>
      {React.Children.map(children, child => React.cloneElement(child, {
        drag, drop: { isOver, canDrop }
      }))}
    </div>
  )
}

const useDnd = (initData = [], Wrapper, Partition = false) => {
  if (!Array.isArray(initData)) {
    console.warn('useDnd: The initialization data must be an array.')
    initData = [initData];
  }
  const [data, setData] = useState([...initData]);
  const onDnd = useCallback((dragTarget, dropTarget) => {
    if (dragTarget == dropTarget) return;
    let tempData = [...data];
    if (!!Partition) {
      // if (dragTarget > dropTarget) {    // 从后往前移动
      //   tempData.splice(dropTarget, 0, tempData.splice(dragTarget, 1).pop());
      // } else {                          // 从前往后移动
      //   tempData.splice(dropTarget, 0, tempData.splice(dragTarget, 1).pop());
      // }
    } else {
      let temp = tempData[dragTarget];
      tempData[dragTarget] = tempData[dropTarget];
      tempData[dropTarget] = temp;
    }
    setData(tempData);
  }, [data]);

  const childrenRender = useCallback((data) => {
    return (
      <>
        {!!Partition && (
          <DropComponent index={-1} onDnd={onDnd}>
            <Partition />
          </DropComponent>
        )}
        {data.map((restProps, index) => {
          if (!!Partition) {
            return (
              <div key={index} style={{display: 'flex'}}>
                <DragComponent index={index}>
                  <Wrapper {...restProps} />
                </DragComponent>
                <DropComponent index={index} onDnd={onDnd}>
                  <Partition />
                </DropComponent>
              </div>
            )
          }
          return (
            <DragComponent index={index} key={index}>
              <DropComponent index={index} onDnd={onDnd}>
                <Wrapper {...restProps} />
              </DropComponent>
            </DragComponent>
          )
        })}
      </>
    ) 
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