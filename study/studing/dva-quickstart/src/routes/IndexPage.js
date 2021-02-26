import React from "react";
import { connect } from "dva";
import { Link } from "dva/router";
function IndexPage() {
  return (
    <div>
      <Link to="/user">user</Link>
      <h1>首页</h1>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
