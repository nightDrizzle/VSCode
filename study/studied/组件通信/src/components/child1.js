import React, { Component } from "react";
export default class Child1 extends Component {
  render() {
    const onChildClick = this.props.onChildClick;
    return (
      <div className="child">
        <button onClick={onChildClick.bind(this, "Child1 data")}>Child1</button>
      </div>
    );
  }
}
