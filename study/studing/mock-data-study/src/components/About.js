import React, { Component } from "react";
export default class App extends Component {
  componentDidMount() {
    console.log(this.props.location);
  }
  render() {
    return <h1>about</h1>;
  }
}
