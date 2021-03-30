import React from "react";
import { connect } from "dva";

function Home() {
  return <div>Home</div>;
}

Home.propTypes = {};

export default connect()(Home);
