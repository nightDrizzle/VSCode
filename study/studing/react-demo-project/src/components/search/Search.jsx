import React, { Component } from "react";
import searchImg from "assets/search.png";
import { BorderSearchWrap } from "./styledSearch";
class Search extends Component {
  render() {
    return (
      <BorderSearchWrap>
        <img src={searchImg} width="20px" height="20px" />
        <sapn>想吃什么搜这里</sapn>
      </BorderSearchWrap>
    );
  }
}

export default Search;
