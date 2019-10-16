/*
 * @Author: ye.chen 
 * @Date: 2019-10-16 15:53:16 
 */
import React from 'react';

export interface IUseDndProps {
  Component: React.ElementType;   // 染组件，渲染列表中每个 item 的组件。必填。
  initData?: object[];    // 初始化的列表参数，默认为空数组，可通过 `setData` 主动注入数据。
  isOrder?: boolean;    // 是否遵循顺序。拖动后，若遵循顺序，拖动对象插入到目标位置；否则拖动对象与目标对象直接替换。默认 false。
  handleChange?: (newData: object[], callback: Function) => void;   // 当拖动发生后的回调函数，排序通过调用 callback 被动改变。
};

export interface IDrag {
  isDragging?: boolean;
  canDrag?: boolean;
}

export interface IDrop {
  isOver?: boolean;
  canDrop?: boolean;
  dropTarget: IDropTarget;
}

export interface IDropTarget {
  type: symbol;
  id?: number | string;
  index: number;
}

export interface IDndProps {
  index: number;
  drag?: IDrag;
  drop?: IDrop;
  isOrder?: boolean;
  type: symbol;
  onDnd?: TOnDnd;
}

export type TOnDnd = (dragTarget: number, dropTarget: number) => void;