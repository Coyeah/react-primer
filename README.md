# 学习react技术栈之路

**[待完善]**

## 入门React学习之路

### react - demo6

![tabs-gif](https://github.com/Coyeah/react-tabs/blob/master/demo06/tabs.gif)

### flux - demo7

[关于Flux](https://github.com/Coyeah/react-primer/blob/master/demo07/README.md)

### redux - demo8 & demo9

基于React-Redux小练习，由一个文件完成Redux。

Redux中的Action、Store、Reducer之间白话关系。（个人理解）

* Action通过dispatch方式告诉store需要修改数据的指令
* Store发送Action指令给Reducer命令指定方法执行
* Reducer接收到Action指令后根据指定方法执行修改State后返回给Store

![Redux Flow](https://github.com/Coyeah/react-primer/blob/master/resource/reduxFlow.jpg)

### redux - demo10

分文件编写:

-- actions

存放Action方法，返回Type和数据。

-- reducers

存放Reducers方法，用switch判断action.type作出不同的操作。

-- containers

存放容器组件，主要负责state&props更改和向展示组件传递数据。

-- components

存放展示组件，从this.props获取数据进行展示。

参考资料：

* [Redux基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
* [Redux中间件和异步操作](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)
* [React-Redux 的用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)

### react-router - demo11 & demo12

路由配置：用于告诉router如何匹配URL以及匹配后如何执行代码。

`<Route path="/" component={...} />`

其主要目的是为了让UI从URL中解耦。在React中组件的变化也类似于页面的变化，因此配合上URL，可以更好的用户体验之余，还能“精准定位”。

demo11 与 demo12 不同于 react-router 的版本不同。v4的 react-router 使用的是 react-router-dom ，里的所有东西“仅仅是组件”，因此更加易懂。

参考资料：

* [简明React Router v4教程](https://juejin.im/post/5a7e9ee7f265da4e7832949c)
* [React Router 4：痛过之后的豁然开朗](https://www.jianshu.com/p/bf6b45ce5bcc)

### redux-saga - demo13

redux中间件，涉及JavaScript生成器。

副作用：在主要作用（action触发reducer）之外，用来处理其他业务逻辑。（受中文的影响，总觉得副作用是什么不好的东西）

常用的两种产生副作用的方式，

* takeEvery: 会在接到相应的action之后不断产生新的副作用。
* takeLates: 在相同额action被触发多次后，只会执行最后一次，其他的都会被取消。

call方法：有些类似Javascript中的call函数，不同的是它可以接受一个返回promise的函数，使用生成器的方式来把异步变同步。

put方法：put就是redux的dispatch，用来触发reducer更新store

*对于中间件的异步操作，个人理解*

```react
componentDidMount() {
  const { dispatch } = this.props
  dispatch(fetchPosts(data));
}
```

react-thunk和react-saga总体来说差不多。

action是一个字符串的标签，告诉reducer需要进行什么操作。而在异步操作中，action传入了一个方法，该方法中还会有一个`dispatch(action)`在异步的回调函数中。

#### 相关框架使用：

* axios: 基于Promise的http库，适用于浏览器和node.js。


参考资料：

* [github.com/redux-saga](https://github.com/redux-saga/redux-saga/blob/master/README_zh-cn.md)
* [redux-saga文档](https://redux-saga-in-chinese.js.org/)
* [redux-saga的简单入门](http://lyn.s76.org/2017/02/14/redux-saga-js/)
* [redux-saga 实践总结](https://zhuanlan.zhihu.com/p/23012870)
* [axios文档](https://github.com/axios/axios)
* [axios中文文档](https://segmentfault.com/a/1190000008470355)

### 综合实践#1 - demo14

技术栈：react + react-router + redux + redux-saga + antd

### dva - demo15

参考资料：

* [github文档](https://github.com/dvajs/dva)
* [dva 介绍](https://github.com/dvajs/dva/issues/1)
* [dva 入门：手把手教你写应用](https://github.com/sorrycc/blog/issues/8)

### 综合实践#2 - demo16

**[持续更新]**

基于 `redux` 的基础 ToDo List 实现基础代码框架，实现分层和工程化。

技术栈：react + react-router + redux + redux-saga + antd

[项目传送门](https://github.com/Coyeah/react-todo)

### React 服务端渲染 - demo17

服务端渲染的好处很多，提高性能、SEO优化支持、可维护性强等等。

服务端渲染和同构大体相同，区别在于服务端渲染主要侧重架构层面的实现，而同构则更注重代码的复用。

技术栈：react + express

#### 相关框架 —— NextJS

[NextJS 官网](https://nextjs.org/)

零配置，即隔离了 webpack 的配置，可以直接上手开发。也可以自定义配置。

### React 高阶组件 - demo18

利用函数柯里化进行对组件进行包装（WrappedComponent），对组件进行事件监听。

### React 与 Mobx - demo19

基于 Mobx 的基础练习，todo list & count。

#### 关于 Mobx

用于状态管理，与 Redux 相同，区别在于状态管理的集中性、构建应用迅速，而 Redux 的写法繁琐。但是在项目足够大的情况下，Redux 更加有优势。

#### 修饰器小问题

这是一个修饰器（ES7）在 webpack 的问题。

`.babelrc` 文件中，`@babel/plugin-proposal-decorators` 与 `@babel/plugin-proposal-class-properties` 的顺序很重要。否则会报错：`SyntaxError: Decorators transform is necessary.`

错误:
```
['@babel/plugin-proposal-class-properties', {
loose: true
}],
['@babel/plugin-proposal-decorators', {
legacy: true
}]
```

---

## 问题：

### 关于React

1. React/Error: Minified React error #130

低级错误; 缺少导入。

**解决方法：**

`export default App;`

2. Module build failed: SyntaxError Unexpected token

使用`static defaultProps`生成默认的props。

```JavaScript
static defaultProps = {
  name: 'React defaultProps demo',
}
```

如果babel设置为es6的转码方式，会报错。因为定义静态属性不属于es6，而在es7的草案中。es6的class中只有静态方法，没有静态属性。加入stage-0后就能尝试es7语法了，static也能在class内部定义属性了。

**解决方法：**

设置babel为es7转码方式，安装babel-preset-stage-0

`npm install --save-dev babel-preset-stage-0`

配置根目录下的`.babelrc`文件

```Json
{
  "presets": ["es2015","react","stage-0"]
}
```

3. Cannot read property 'string' of undefined

在之前的版本可以通过React.PropTypes这个API来访问React内置的一些类型来检查props，后来这一API被独立成了一个新的包prop-types

**解决方法：**

安装并引用prop-types

`cnpm install --save prop-types`

4. Objects are not valid as a React child (found: object with keys {key, id, title}).

该问题是在React组件中有部分是不符合元素/组件的格式。

我所遇到的问题的是，我想直接通过`{this.props.data}`把数据输出就报错了。

因为JS对象不符合元素的格式。

### 关于Redux

1. Uncaught Error: Actions may not have an undefined "type" property. Have you misspelled a constant?

```JavaScript
// 改动前
export default connect(state => ({
  text: state.text,
}), dispatch => ({
  actions: bindActionCreators(NumActions, dispatch),
}))(App)

// 改动后
export default connect(state => ({
  text: state.text,
}), dispatch => ({
  addNumHandler: () => dispatch(addNumber),
  subNumHandler: () => dispatch(subNumber),
}))(App)
```

这个错误为什么还不知道为什么。在展示组件上需要在this.props上获取数据。

但是，延伸出第二个问题。

2. Actions must be plain objects. Use custom middleware for async actions.

* 原因一：使用异步actions时，没有配置redux-thunk这个中间件
* 原因二：调用action方法时，方法体内部并没有调用dispatch。
