// IMPORTS //
// External
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import Helmet from "react-helmet";

// Internal

// UTILS //

// COMPONENT //
class Home extends Component {
  // PROP-TYPES //
  static propTypes = {};

  // RENDER //
  render() {
    return (
      <section className="ja-page home">
        <Helmet title="Welcome!" />
        <h1>Home</h1>
      </section>
    );
  }
}

// CONNECT //
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
const Connected = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

// EXPORTS //
export const Unconnected = Home;
export default Connected