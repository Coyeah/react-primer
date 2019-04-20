# 学习react技术栈之路

记录下在学习 React 及其生态圈所练习的 Demo 与关键知识点，利于回顾复习。

## React 初入门练习 - demo01

1 ~ 6 的练习，最终效果展示：

![Tabs 效果展示](https://github.com/Coyeah/react-tabs/blob/master/resource/tabs.gif)

## 关于 Flux - demo02

不常用，学习的更是一种数据结构的构建思想。想要了解可以看看[Flux 架构入门教程（阮一峰）](https://github.com/ruanyf/extremely-simple-flux-demo)

[关于Flux](https://github.com/Coyeah/react-primer/blob/master/demo07/README.md)

## Redux - demo03

Redux中的Action、Store、Reducer之间白话关系。（个人理解）

* Action通过dispatch方式告诉store需要修改数据的指令
* Store发送Action指令给Reducer命令指定方法执行
* Reducer接收到Action指令后根据指定方法执行修改State后返回给Store

![Redux Flow](https://github.com/Coyeah/react-primer/blob/master/resource/reduxFlow.jpg)

参考资料：

* [Redux基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
* [Redux中间件和异步操作](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)
* [React-Redux 的用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)

## react-router - demo04

路由配置：用于告诉router如何匹配URL以及匹配后如何执行代码。

`<Route path="/" component={...} />`

其主要目的是为了让UI从URL中解耦。在React中组件的变化也类似于页面的变化，因此配合上URL，可以更好的用户体验之余，还能“精准定位”。

参考资料：

* [简明React Router v4教程](https://juejin.im/post/5a7e9ee7f265da4e7832949c)
* [React Router 4：痛过之后的豁然开朗](https://www.jianshu.com/p/bf6b45ce5bcc)

## redux-saga - demo05

redux中间件，涉及JavaScript生成器。关键词：**副作用**。

副作用：在主要作用（action触发reducer）之外，用来处理其他业务逻辑。（受中文的影响，总觉得副作用是什么不好的东西）。

参考资料：

* [github.com/redux-saga](https://github.com/redux-saga/redux-saga/blob/master/README_zh-cn.md)
* [redux-saga文档](https://redux-saga-in-chinese.js.org/)
* [redux-saga的简单入门](http://lyn.s76.org/2017/02/14/redux-saga-js/)
* [redux-saga 实践总结](https://zhuanlan.zhihu.com/p/23012870)

## 综合实践#1 - demo06

技术栈：react + react-router + redux + redux-saga + antd

## dva - demo07

参考资料：

* [github文档](https://github.com/dvajs/dva)
* [dva 介绍](https://github.com/dvajs/dva/issues/1)
* [dva 入门：手把手教你写应用](https://github.com/sorrycc/blog/issues/8)

## 服务端渲染 - demo08

服务端渲染的好处很多，提高性能、SEO优化支持、可维护性强等等。

服务端渲染和同构大体相同，区别在于服务端渲染主要侧重架构层面的实现，而同构则更注重代码的复用。

技术栈：react + express

## React 高阶组件 - demo09

利用函数柯里化进行对组件进行包装（WrappedComponent），对组件进行事件监听。

## Mobx - demo10

基于 Mobx 的基础练习，todo list & count。

![Mobx Flow](https://github.com/Coyeah/react-primer/blob/master/resource/mobxFlow.png)

## React 中的 Context - demo11

`Context` 被翻译为上下文。

很多优秀的 React 组件都通过 Context 来完成自己的功能，比如 react-redux 的 <Provider />，就是通过 Context 提供一个全局态的 store；拖拽组件 react-dnd，通过 Context 在组件中分发 DOM 的 Drag 和 Drop 事件，路由组件 react-router 通过 Context 管理路由状态等等。在 React 组件开发中，如果用好 Context，可以让你的组件变得强大，而且灵活。

参考资料：
[React-Context官方文档](https://zh-hans.reactjs.org/docs/context.html#when-to-use-context)
[聊一聊我对 React Context 的理解以及应用](https://www.jianshu.com/p/eba2b76b290b)

## 综合实践#2 - demo12

技术栈：react + react-router-dom + mobx + mobx-react + mobx-react-lite

## Rx.js
