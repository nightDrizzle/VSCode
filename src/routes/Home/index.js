/**
 * @file Home/index.js 首页
 * @author nightDrizzle@outlook.com
 */
import React from "react";
import { connect } from "dva";
import { Link } from "dva/router";
class Home extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    return (
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/docs">文档</Link>
        </li>
        <li>
          <Link to="/antd">antd</Link>
        </li>
      </ul>
    );
  }
}

Home.propTypes = {};

export default connect()(Home);
