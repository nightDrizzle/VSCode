import React from "react";
import { Router, Route, Switch } from "dva/router";
import Home from "./routes/Home/index";
import Docs from "./routes/Docs/index";
import Antd from "./routes/Antd/index";
// import Study from "./routes/Study/index";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <main>
        <header></header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/docs" exact component={Docs} />
          <Route path="/antd" exact component={Antd} />
        </Switch>
      </main>
    </Router>
  );
}

export default RouterConfig;
