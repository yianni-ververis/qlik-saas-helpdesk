import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default App;
