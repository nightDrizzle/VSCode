import "./App.css";
import React from "react";
import Brother2 from "./components/brother2";
import Brother1 from "./components/brother1";
import Child1 from "./components/child1";
import Child2 from "./components/child2";
import Consumer1 from "./components/consumer1";
import Consumer2 from "./components/consumer2";

import { DataContext } from "./components/dataContext";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transferedData: "parent data",
      consumerData: "default context",
    };
  }
  handleChildClick = (data) => {
    this.setState({ transferedData: data });
  };
  handleConsumerClick = (data) => {
    this.setState({ consumerData: data });
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <h1>1.兄弟组件通信--events</h1>
            <h3>Brother2&lt;-&gt;Brother1</h3>
            <Brother1 />
            <Brother2 />
          </li>
          <li>
            <h1>2.兄弟组件通信--子传父传子</h1>
            <h3>Child1-App-Child2</h3>
            <h3>{this.state.transferedData}</h3>
            <Child1 onChildClick={this.handleChildClick} />
            <Child2 transferedData={this.state.transferedData} />
          </li>
          <li>
            <h1>3.兄弟组件通信--context</h1>
            <h3>Consumer1-App-Consumer2</h3>
            <DataContext.Provider value="no data">
              <p>data:{this.state.consumerData}</p>
              <Consumer1 onConsumerClick={this.handleConsumerClick} />
              <Consumer2 consumerData={this.state.consumerData} />
            </DataContext.Provider>
          </li>
          <li>
            ……
            {/* <h1>4.兄弟组件通信--利用组合关系</h1>
            <h3></h3> */}
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
