import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import Popular from "../routes/Popular";
import Later from "../routes/Later";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/later" exact component={Later} />
        <Route path="/popular" exact component={Popular} />
      </Switch>
    </>
  </Router>
);
