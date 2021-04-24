/**
 * @file Antd/index.js 首页
 * @author nightDrizzle@outlook.com
 */
import React from "react";
import { connect } from "dva";
import "antd/dist/antd.css";
// import MenuAbove from "./components/MenuAbove";
// import MenuCheckMode from "./components/MenuCheckMode";
import MenuTheme from "./components/MenuTheme";
class Antd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menudata: [
        {
          name: "submenu",
          key: 1,
          title: "表单",
          items: [
            { key: "form", content: "Form 表单" },
            { key: "baseform", content: "基础表单" },
            { key: "unionform", content: "复杂表单" },
          ],
        },
        {
          name: "submenu",
          key: 2,
          title: "表格",
          items: [
            { key: 5, content: "Form" },
            { key: 6, content: "Input" },
            { key: 7, content: "Button" },
            { key: 8, content: "InputNumber" },
          ],
        },
        {
          name: "submenu",
          key: 3,
          title: "导航",
          items: [
            { key: 9, content: "Form" },
            { key: 10, content: "Input" },
            { key: 11, content: "Button" },
            { key: 12, content: "InputNumber" },
          ],
        },
        {
          name: "submenu",
          key: 4,
          title: "弹框/提示",
          items: [
            { key: 13, content: "Form" },
            { key: 14, content: "Input" },
            { key: 15, content: "Button" },
            { key: 16, content: "InputNumber" },
          ],
        },
      ],
    };
  }
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    return (
      <div>
        <MenuTheme menuData={this.state.menudata} />
      </div>
    );
  }
}

Antd.propTypes = {};

export default connect()(Antd);
