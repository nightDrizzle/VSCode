import React, { Component } from "react";
export default class User extends Component {
  componentDidMount() {
    console.log(this.props.location.pathname);
  }
  render() {
    return <h1>user2</h1>;
  }
}
