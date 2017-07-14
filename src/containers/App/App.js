// IMPORTS //
// External
import React, { Component } from "react";
import Helmet from "react-helmet";

// Internal
import { Routes, Nav } from "../../components";
import config from "../../config";

// UTILS //

// COMPONENT //
const App = () => (
  <section className="app">
    <Helmet {...config.app.head} />
    <Nav />
    <Routes />
  </section>
);

// PROP-TYPES //
App.propTypes = {};

// EXPORTS //
export default App;