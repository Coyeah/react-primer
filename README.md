# React - Tabs

**[待完善]**

入门React学习之路

问题：

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
