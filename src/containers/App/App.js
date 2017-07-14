// IMPORTS //
// External
import React, { Component } from "react";

// Internal
import { Routes, Nav } from "../../components";

// UTILS //

// COMPONENT //
class App extends Component {
  // PROP-TYPES //
  static propTypes = {};

  // RENDER //
  render() {
    return (
      <section className="app">
        <Nav />
        <Routes />
      </section>
    );
  }
}

// EXPORTS //
export default App;