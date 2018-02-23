// IMPORTS //
// External
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import renderRoutes from "react-router-config/renderRoutes";
import Helmet from "react-helmet";

// Internal
import { Nav } from "../../components";
import config from "../../config";

// UTILS //

// COMPONENT //
class App extends Component {
  // PROP-TYPES //
  static propTypes = {};

  // RENDER //
  render() {
    const { route } = this.props;

    return (
      <div className="app">
        <Helmet {...config.app.head} />
        <Nav />
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

// CONNECT //
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
const Connected = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// EXPORTS //
export const Unconnected = App;
export default Connected;
