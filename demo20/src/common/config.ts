import React from 'react';
import {dynamicWrapper} from '@/utils/dynamicWrapper';

const config = [{
    path: '/todo',
    name: '待办事项',
    icon: 'ordered-list',
    component: dynamicWrapper(() => import('../pages/Home'))
  }, {
    path: '/report',
    name: '事项报告',
    icon: 'book',
    component: dynamicWrapper(() => import('../pages/Report'))
  }
]

export default config;
