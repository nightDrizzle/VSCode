import React, { Component } from "react";
import { withRouter } from "dva/router";
class Child extends Component {
  handleToIndex = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div>
        <div>通用组件child</div>
        <button onClick={this.handleToIndex}>首页_child</button>
      </div>
    );
  }
}

export default withRouter(Child);
