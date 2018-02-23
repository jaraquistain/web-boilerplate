// IMPORTS //
// External
import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { ReduxAsyncConnect } from "redux-connect";

// Internal

// UTILS //

// COMPONENT //
const RootServer = ({ context, location, routes, store }) => {
  return (
    <Provider store={store} key="provider">
      <StaticRouter location={location} context={context}>
        <ReduxAsyncConnect routes={routes} />
      </StaticRouter>
    </Provider>
  );
};

// PROP-TYPES //
RootServer.propTypes = {
  context: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  store: PropTypes.object.isRequired
};

// EXPORT
export default RootServer;
