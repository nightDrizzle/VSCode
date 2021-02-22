import React, { Component } from "react";
import { DataContext } from "./dataContext";
export default class Consumer1 extends Component {
  static contextType = DataContext;
  render() {
    return (
      <div className="child">
        <button>consumer2</button>
        <span>data:{this.props.consumerData}</span>
        <span>data:{this.context}</span>
      </div>
    );
  }
}
