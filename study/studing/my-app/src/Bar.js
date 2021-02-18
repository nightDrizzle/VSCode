import { Component } from "react";
import emitter from "./event.js";
export default class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Bar" };
  }
  changeText = (msg) => {
    this.setState({ text: msg });
  };
  componentDidMount() {
    emitter.on("say", (msg) => {
      this.changeText(msg);
    });
  }
  componentWillUnmount() {
    emitter.removeAllListeners("say");
  }
  render() {
    return <div>{this.state.text}</div>;
  }
}
