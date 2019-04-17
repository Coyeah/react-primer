# redux-saga

call方法：有些类似Javascript中的call函数，不同的是它可以接受一个返回promise的函数，使用生成器的方式来把异步变同步。

put方法：put就是redux的dispatch，用来触发reducer更新store。

常用的两种产生副作用的方式，

* takeEvery: 会在接到相应的action之后不断产生新的副作用。
* takeLates: 在相同额action被触发多次后，只会执行最后一次，其他的都会被取消。

*对于中间件的异步操作，个人理解*

```react
componentDidMount() {
  const { dispatch } = this.props
  dispatch(fetchPosts(data));
}
```

react-thunk和react-saga总体来说差不多。

action是一个字符串的标签，告诉reducer需要进行什么操作。而在异步操作中，action传入了一个方法，该方法中还会有一个`dispatch(action)`在异步的回调函数中。

## 相关框架使用：

* axios: 基于Promise的http库，适用于浏览器和node.js。

* [axios文档](https://github.com/axios/axios)
* [axios中文文档](https://segmentfault.com/a/1190000008470355)
