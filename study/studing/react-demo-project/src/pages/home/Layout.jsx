import { TabBar } from "antd-mobile";
import React, { Component } from "react";

import cookbook from "assets/cookbook.png";
import cookbookActive from "assets/cookbook-active.png";
import location from "assets/location.png";
import locationActive from "assets/location-active.png";
import menu from "assets/menu.png";
import menuActive from "assets/menu-active.png";
import more from "assets/more.png";
import moreActive from "assets/more-active.png";

import Cookbook from "./cookbook/Cookbook";
export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "cookbook", // 当前选中标签
      hidden: false, // 是否隐藏
      fullScreen: true, // 是否充满屏幕
    };
  }

  renderContent(pageText) {
    return <div>{pageText}</div>;
  }

  render() {
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", height: "100%", width: "100%", top: 0 }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="美食大全"
            key="cookbook"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${cookbook}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${cookbookActive}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selected={this.state.selectedTab === "cookbook"}
            onPress={() => {
              this.setState({
                selectedTab: "cookbook",
              });
            }}
          >
            {<Cookbook />}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${menu}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${menuActive}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            title="分类"
            key="category"
            selected={this.state.selectedTab === "category"}
            onPress={() => {
              this.setState({
                selectedTab: "category",
              });
            }}
          >
            {this.renderContent("Friend")}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${location}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${locationActive}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            title="位置"
            key="location"
            selected={this.state.selectedTab === "location"}
            onPress={() => {
              this.setState({
                selectedTab: "location",
              });
            }}
          >
            {this.renderContent("Koubei")}
          </TabBar.Item>

          <TabBar.Item
            icon={{ uri: more }}
            selectedIcon={{
              uri: moreActive,
            }}
            title="更多"
            key="更多"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab",
              });
            }}
          >
            {this.renderContent("My")}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
