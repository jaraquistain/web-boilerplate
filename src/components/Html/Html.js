import React, { Component } from "react";
import PropTypes from "prop-types";
import serialize from "serialize-javascript";

class Html extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    const content = { __html: "<div>This is the html page</div>" };
    const state = { __html: `window.appState=${serialize(store.getState())};` };

    return (
      <html lang="en-US">
        <head></head>
        <body>
          {/* Populate DOM content */}
          <div id="content" dangerouslySetInnerHTML={content} />
          {/* Populate app state */}
          <script dangerouslySetInnerHTML={state} charSet="UTF-8" />
        </body>
      </html>
    );

  }
}

export default Html;
