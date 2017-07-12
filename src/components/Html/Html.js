import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";
import serialize from "serialize-javascript";

class Html extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    component: PropTypes.node
  };

  render() {
    const { store, component } = this.props;
    const content = { __html: ReactDOMServer.renderToString(component) };
    const state = { __html: `window._appState=${serialize(store.getState())};` };

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
