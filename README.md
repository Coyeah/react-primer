# 学习react技术栈之路

记录下在学习 React 及其生态圈所练习的 Demo 与关键知识点，利于回顾复习。

+ [React 初入门练习 - demo01](https://github.com/Coyeah/react-primer#react-%E5%88%9D%E5%85%A5%E9%97%A8%E7%BB%83%E4%B9%A0---demo01)
+ [关于 Flux - demo02](https://github.com/Coyeah/react-primer#%E5%85%B3%E4%BA%8E-flux---demo02)
+ [Redux - demo03](https://github.com/Coyeah/react-primer#redux---demo03)
+ [react-router - demo04](https://github.com/Coyeah/react-primer#react-router---demo04)
+ [redux-saga - demo05](https://github.com/Coyeah/react-primer#redux-saga---demo05)
+ [综合实践#1 - demo06](https://github.com/Coyeah/react-primer#%E7%BB%BC%E5%90%88%E5%AE%9E%E8%B7%B51---demo06)
+ [dva - demo07](https://github.com/Coyeah/react-primer#dva---demo07)
+ [服务端渲染 - demo08](https://github.com/Coyeah/react-primer#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93---demo08)
+ [React 高阶组件 - demo09](https://github.com/Coyeah/react-primer#react-%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6---demo09)
+ [Mobx - demo10](https://github.com/Coyeah/react-primer#mobx---demo10)
+ [React 中的 Context - demo11](https://github.com/Coyeah/react-primer#react-%E4%B8%AD%E7%9A%84-context---demo11)
+ [综合实践#2 - demo12](https://github.com/Coyeah/react-primer#%E7%BB%BC%E5%90%88%E5%AE%9E%E8%B7%B52---demo12)
+ [Rx.js - demo13](https://github.com/Coyeah/react-primer#rxjs---demo13)
+ [Hooks - demo14](https://github.com/Coyeah/react-primer#Hooks---demo14)

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
+ [React-Context官方文档](https://zh-hans.reactjs.org/docs/context.html#when-to-use-context)
+ [聊一聊我对 React Context 的理解以及应用](https://www.jianshu.com/p/eba2b76b290b)

## 综合实践#2 - demo12

技术栈：react + react-router-dom + mobx + mobx-react + mobx-react-lite

## Rx.js - demo13

参考资料：
+ [构建流式应用：RxJS 详解](https://cloud.tencent.com/developer/article/1004937)
+ [在React中使用RxJS](https://zhuanlan.zhihu.com/p/31879126)
+ [指路Reactive Programming](http://blog.leapoahead.com/2016/03/02/introduction-to-reactive-programming/)
+ [redux-observable](https://redux-observable.js.org/)
+ [Rx.js](https://rxjs-dev.firebaseapp.com/)

## Hooks - demo14

使用 React Hooks 相比于从前的类组件有以下几点好处：

+ 代码可读性更强，原本同一块功能的代码逻辑被拆分在了不同的生命周期函数中，容易使开发者不利于维护和迭代，通过 React Hooks 可以将功能代码聚合，方便阅读维护。
+ 组件树层级变浅，在原本的代码中，我们经常使用 HOC/render props 等方式来复用组件的状态，增强功能等，无疑增加了组件树层数及渲染，而在 React Hooks 中，这些功能都可以通过强大的自定义的 Hooks 来实现。
