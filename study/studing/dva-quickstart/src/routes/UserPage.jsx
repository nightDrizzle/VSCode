import React, { Component } from "react";
import { Link } from "dva/router";
import Child from "../components/Child";
class UserPage extends Component {
  handleToIndex = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div>
        <Link to="/">to indexPage</Link>
        <button onClick={this.handleToIndex}>to indexPage</button>
        <Child />
      </div>
    );
  }
}

export default UserPage;
