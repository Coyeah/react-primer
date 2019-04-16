import React from 'react';
import {dynamicWrapper} from '@/utils/dynamicWrapper';

const config = [
  {
    path: '/todo-class',
    name: '待办事项(class)',
    icon: 'ordered-list',
    component: dynamicWrapper(() => import('../pages/Home'))
  }, {
    path: '/report-class',
    name: '事项报告(class)',
    icon: 'book',
    component: dynamicWrapper(() => import('../pages/Report'))
  }, {
    path: '/todo-hooks',
    name: '待办事项(hooks)',
    icon: 'ordered-list',
    component: dynamicWrapper(() => import('../pages/HomeFc'))
  }, {
    path: '/report-hooks',
    name: '事项报告(hooks)',
    icon: 'book',
    component: dynamicWrapper(() => import('../pages/ReportFc'))
  },
]

export default config;
