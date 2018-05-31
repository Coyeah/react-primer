# react - primer

**[待完善]**

入门React学习之路

* *React - demo6*

![tabs-gif](https://github.com/Coyeah/react-tabs/blob/master/demo06/tabs.gif)

* *Flux - demo7*

[关于Flux](https://github.com/Coyeah/react-primer/blob/master/demo07/README.md)

* *Redux - demo8 & demo9*

基于React-Redux小练习，由一个文件完成Redux。

* *Redux - demo10*

React-Redux，分文件编写。

-- actions

存放Action方法，返回Type和数据。

-- reducers

存放Reducers方法，用switch判断action.type作出不同的操作。

-- containers

存放容器组件，主要负责state&props更改和向展示组件传递数据。

-- components

存放展示组件，从this.props获取数据进行展示。

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

4. make me crary!?

我也不知道为什么。

这个，是我手打的。

```JavaScript
<Tabs defaultAcitveIndex={this.state.activeIndex} className="tabs-bar">
  <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
  <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
  <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
</Tabs>
```

这个，是教材的源码。

```JavaScript
<Tabs defaultActiveIndex={this.state.activeIndex} className="tabs-bar">
  <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
  <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
  <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
</Tabs>
```

找不同？

就这一小段，我手打的，没有效果。教材源码，就有效果。

还是我眼瞎？

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

参考资料：

* [Redux基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
* [Redux中间件和异步操作](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)
* [React-Redux 的用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)