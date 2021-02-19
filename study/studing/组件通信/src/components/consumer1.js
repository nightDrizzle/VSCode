import React, { Component } from "react";
import { DataContext } from "./dataContext";

class Button extends React.Component {
  render() {
    return;
  }
}

export default class Consumer1 extends Component {
  static contextType = DataContext;
  render() {
    return (
      <div className="child">
        <button
          onClick={this.props.onConsumerClick.bind(this, "consumer1 data")}
        >
          consumer1
        </button>
        <span>data:{this.context}</span>
      </div>
    );
  }
}
