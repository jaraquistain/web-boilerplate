// IMPORTS //
// External
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

// Internal

// UTILS //

// COMPONENT //
class NotFound extends Component {
  // PROP-TYPES //
  static propTypes = {};

  // RENDER //
  render() {
    return (
      <section className="ja-page not-found">
        <h1>404</h1>
      </section>
    );
  }
}

// CONNECT //
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
const Connected = withRouter(connect(mapStateToProps, mapDispatchToProps)(NotFound));

// EXPORTS //
export const Unconnected = NotFound;
export default Connected