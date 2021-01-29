import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './Home'
import PageNotFound from "./PageNotFound";
import PostDetailPage from "./PostDetailPage";

export default class RoutingComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
           <Route path="/postDetailPage" component={PostDetailPage} /> 
          
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
