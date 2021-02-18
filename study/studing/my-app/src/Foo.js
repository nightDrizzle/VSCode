import { Component } from "react";
import emitter from "./event.js";
export default class Foo extends Component {
  handleClick = () => {
    emitter.emit("say", "hello");
  };
  render() {
    return (
      <div className="foo">
        <button onClick={this.handleClick}>Foo</button>
      </div>
    );
  }
}
