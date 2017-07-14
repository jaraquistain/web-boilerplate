import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import { Home, NotFound } from "../../containers";

class App extends Component {
  render() {
    return (
      <section className="app">
        <nav>
          <Link to="/">Home</Link><br />
          <Link to="/a">Not Found</Link><br />
        </nav>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound}/>
          </Switch>
        </section>
      </section>
    );
  }
}

export default App;