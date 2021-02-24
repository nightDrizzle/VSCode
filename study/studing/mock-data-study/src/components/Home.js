import React, { Component } from "react";
import * as action from "../redux/action";
import { store } from "../redux/store";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num: store.getState() };
  }
  componentDidMount() {
    c;
    store.subscribe(() => {
      this.setState({ num: store.getState() });
    });
  }
  render() {
    return (
      <div>
        count:{this.state.num}
        <button
          onClick={() => {
            store.dispatch(action.add(2));
          }}
        >
          age+1
        </button>
        <button
          onClick={() => {
            store.dispatch(action.del(3));
          }}
        >
          age-1
        </button>
      </div>
    );
  }
}
