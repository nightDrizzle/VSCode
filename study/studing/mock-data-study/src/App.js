import Home from "./components/Home";
import About from "./components/About";
import React from "react";
import { Route, Link } from "react-router-dom";
function Com() {
  return <div>sss</div>;
}
function App() {
  return (
    <div>
      <h1>App</h1>
      <div>
        <Link to="/">app</Link>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
      </div>
      <Route path="/" component={Com}>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Route>
    </div>
  );
}

export default App;
