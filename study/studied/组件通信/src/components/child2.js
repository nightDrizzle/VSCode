import React, { Component } from "react";
export default class Child1 extends Component {
  render() {
    return (
      <div className="child">
        Child2:{this.props.transferedData || "Child2"}
      </div>
    );
  }
}
