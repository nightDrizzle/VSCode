import React, { Component } from "react";
import eventsEmitter from "./event";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "brother1" };
  }
  handleClick = () => {
    eventsEmitter.emit("brother1Say", "brother1 message");
  };
  componentDidMount() {
    eventsEmitter.on("brother2Say", (data) => {
      console.log("brother1 listen to brother2");
      this.setState({ text: data });
    });
  }
  componentWillUnmount() {
    eventsEmitter.removeAllListeners("brother2Say");
  }
  render() {
    return (
      <div className="brother1">
        <button onClick={this.handleClick}>brother1</button>
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}
