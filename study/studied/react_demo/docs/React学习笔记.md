### state 和 props 的区别

#### 相同点

1. 都是数据 Model

#### 不同点

1. state 是组件私有的，props 可以传递给子组件
2. state 可以改变，props 只能通过修改父组件的 props，不能直接修改子组件的 props
3. props 在整个生命周期都保持不变

### state 保存哪种数据

1. UI 能够改变的数据

### state 使用注意事项

1. 不要直接复制父组件的 props 到子组件作为 state，因为当父组件重新渲染时，props 会重置，导致子组件的 state 也被重置，无法保存之前的状态。
