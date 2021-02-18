import React, { Component } from "react";

import Foo from "./Foo";
import Bar from "./Bar";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Foo />
        <Bar />
      </div>
    );
  }
}
