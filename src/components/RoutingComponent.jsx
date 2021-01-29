import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Chart from "./Chart";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import TablePage from "./TablePage";
export default class RoutingComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/tablePage" component={TablePage} />
          
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
