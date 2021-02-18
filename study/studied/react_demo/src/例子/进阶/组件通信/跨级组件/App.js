import React from 'react'
import ReactDOM from 'react-dom'
class Foo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: null
    }
  }
  componentDidMount() {
    // 声明一个自定义事件
    // 在组件装载完成以后
    this.eventEmitter = emitter.addListener('callMe', (msg) => {
      this.setState({
        msg
      })
    })
  }
  // 组件销毁前移除事件监听
  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter)
  }
  render() {
    return (
      <div>
        {this.state.msg}
        我是非嵌套 1 号
      </div>
    )
  }
}
class Boo extends React.Component {
  render() {
    const cb = (msg) => {
      return () => {
        // 触发自定义事件
        emitter.emit('callMe', 'Hello')
      }
    }
    return (
      <div>
        我是非嵌套 2 号<button onClick={cb('blue')}>点击我</button>
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Foo />
        <Boo />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))
