import React from "react";
import { connect } from "dva";
import { Menu, Switch } from "antd";
import { withRouter } from "dva/router";
const { SubMenu } = Menu;

@withRouter
class MenuTheme extends React.Component {
  state = {
    theme: "dark",
    current: "1",
  };

  changeTheme = (value) => {
    this.setState({
      theme: value ? "dark" : "light",
    });
  };

  handleClick = (e) => {
    console.log(this);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { menuData } = this.props;
    return (
      <>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Menu.Item key="0">
            <Switch
              checked={this.state.theme === "dark"}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </Menu.Item>
          {menuData.map((submenu) => (
            <SubMenu key={submenu.key} title={submenu.title}>
              {submenu.items.map((item) => (
                <Menu.Item key={item.key}>{item.content}</Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </>
    );
  }
}

export default connect()(MenuTheme);
