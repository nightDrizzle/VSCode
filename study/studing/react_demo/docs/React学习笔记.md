### state和props的区别
#### 相同点
1. 都是数据Model
#### 不同点
1. state是组件私有的，props可以传递给子组件
2. state可以改变，props只能通过修改父组件的props，不能直接修改子组件的props
2. props在整个生命周期都保持不变

### state 保存哪种数据
1. UI能够改变的数据
