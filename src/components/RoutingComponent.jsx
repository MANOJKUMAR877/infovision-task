import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Chart from "./Chart";
import Home from './Home'
import PageNotFound from "./PageNotFound";

export default class RoutingComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/chart" component={Chart} />
          
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
