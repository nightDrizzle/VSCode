import React from "react";
import { Router, Route, Switch, Link } from "dva/router";
import Home from "./routes/Home/index";
import Docs from "./routes/Docs/index";
import Antd from "./routes/Antd/index";
import Study from "./routes/Study/index";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <main>
        <header></header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/docs" exact component={Docs} />
          <Route path="/study" exact component={Antd} />
          <Route path="/study/antd" exact component={Study} />
        </Switch>
      </main>
    </Router>
  );
}

export default RouterConfig;
