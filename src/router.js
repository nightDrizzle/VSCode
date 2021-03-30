import React from "react";
import { Router, Route, Switch } from "dva/router";
import Home from "./routes/Home";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/docs" exact component={Home} />
        <Route path="/study" exact component={Home} />
        <Route path="/study/antd" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
