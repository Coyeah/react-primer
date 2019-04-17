# 关于 Mobx

用于状态管理，与 Redux 相同，区别在于状态管理的集中性、构建应用迅速，而 Redux 的写法繁琐。但是在项目足够大的情况下，Redux 更加有优势。

## 修饰器小问题

[关于修饰器Decorator](https://www.coyeah.top/2019/04/03/%E5%85%B3%E4%BA%8E%E4%BF%AE%E9%A5%B0%E5%99%A8Decorator/)

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
