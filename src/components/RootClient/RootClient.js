// IMPORTS //
// External
import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ReduxAsyncConnect } from "redux-connect";

// Internal

// UTILS //

// COMPONENT //
const RootClient = ({ store, routes = [] }) => {
  return (
    <Provider store={store} key="provider">
      <BrowserRouter>
        <ReduxAsyncConnect routes={routes} />
      </BrowserRouter>
    </Provider>
  );
};

// PROP-TYPES //
RootClient.propTypes = {
  store: PropTypes.object.isRequired
};

// EXPORT
export default RootClient;
