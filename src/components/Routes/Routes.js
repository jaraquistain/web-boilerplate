// IMPORTS //
// External
import React from "react";
import { Switch, Route } from "react-router-dom";

// Internal
import { Home, NotFound } from "../../containers";

// Internal

// UTILS //

// COMPONENT //
const Routes = (props) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={NotFound}/>
  </Switch>
);

// PROP-TYPES //
Routes.propTypes = {};

// EXPORTS //
export default Routes