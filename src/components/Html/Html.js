// IMPORTS //
// External
import React from "react";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";
import serialize from "serialize-javascript";
import Helmet from "react-helmet";

// Internal

// UTILS //

// COMPONENT //
const Html = ({ store, view, assets: { javascript: scripts } }) => {
  const content = { __html: ReactDOMServer.renderToString(view) };
  const state = { __html: `window._appState=${serialize(store.getState())};` };
  const head = Helmet.rewind();

  return (
    <html lang="en-US">
    <head>
      {head.base.toComponent()}
      {head.title.toComponent()}
      {head.meta.toComponent()}
      {head.link.toComponent()}
      {head.script.toComponent()}
    </head>
    <body>
    {/* Populate DOM content */}
    <div id="content" dangerouslySetInnerHTML={content} />
    {/* Populate app state */}
    <script dangerouslySetInnerHTML={state} charSet="UTF-8" />
    {/* load main script */}
    <script src={scripts.main} charSet="UTF-8" />
    </body>
    </html>
  );
};

// PROP-TYPES //
Html.propTypes = {
  store: PropTypes.object.isRequired,
  assets: PropTypes.shape({
    javascript: PropTypes.shape({
      main: PropTypes.string.isRequired
    })
  }),
  view: PropTypes.node.isRequired
};

// EXPORT
export default Html;
