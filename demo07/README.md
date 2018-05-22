# 关于Flux

说Flux脱不了MVC和MVVM。

## MVC的问题：

MVC的Model与View都是由Controller控制的，数据流向是双向的。随着项目越来越大，逻辑越来越复杂，数据流动就会变得混乱。

## Flux的解决方案：

Flux的核心思想是数据和逻辑永远单向流动。

在Flux应用中，数据流向：action --> dispatcher --> store --> view。单向不可逆。

其中，dispatcher负责分发事件；store负责保存数据，同时响应事件并更新数据；view负责订阅store中的数据，并使用这些数据渲染相应的页面。

相比MVC，Flux没有一个明确的Controller的职责，则有一个controller-view的角色负责view与store进行绑定。

## Flux应用实例

### 目录结构

```
|-- css
|   |-- app.css
|-- js
    |-- actions/
    |-- components/
    |-- constants/
    |-- dispatcher/
    |-- stores/
    |-- app.js
```

## Flux不足

冗余代码太多。