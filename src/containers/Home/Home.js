import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

class Home extends Component {
  static propTypes = {};

  render() {
    console.log("props:", this.props);
    return <div>test</div>;
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));