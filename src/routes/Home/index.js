import React from "react";
import { connect } from "dva";
import { Menu } from "antd";
import "antd/dist/antd.css";
import MenuAbove from "./components/MenuAbove";
class Home extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    return <MenuAbove />;
  }
}

Home.propTypes = {};

export default connect()(Home);
