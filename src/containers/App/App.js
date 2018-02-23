// IMPORTS //
// External
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
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
    const { view: View, location: { pathname } } = this.props;

    return (
      <section className="app">
        <Helmet {...config.app.head} />
        <Nav />
        {View ? <View /> : <div>No view element provided in route config for {pathname}</div>}
      </section>
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

export const getViewComponent = (view) => () => <Connected view={view} />;
