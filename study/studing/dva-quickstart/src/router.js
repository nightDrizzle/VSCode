import React from "react";
import { Router, Route, Switch, Link } from "dva/router";
import IndexPage from "./routes/IndexPage";
import UserPage from "./routes/UserPage";

function RouterConfig({ history }) {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/user" component={UserPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default RouterConfig;
