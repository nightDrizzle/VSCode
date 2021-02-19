import React, { Component } from "react";
import eventsEmitter from "./event";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "brother2" };
  }
  handleClick = () => {
    eventsEmitter.emit("brother2Say", "brother2 message");
  };
  componentDidMount() {
    eventsEmitter.on("brother1Say", (data) => {
      console.log("brother2 listen to brother1");
      this.setState({ text: data });
    });
  }
  componentWillUnmount() {
    eventsEmitter.removeAllListeners("brother1Say");
  }
  render() {
    return (
      <div className="brother2">
        <button onClick={this.handleClick}>brother2</button>
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}
