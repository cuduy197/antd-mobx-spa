import React from "react";

import NavBar from "#/NavBar";
//pages
import Home from "~/Home";
import Docs from "~/Docs";
import NotFound from "~/NotFound";
// fix router
@withRouter
@inject("user")
@observer
export default class AppRouter extends React.Component {
  render() {
    let user = this.props.user;
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/docs" component={Docs} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
