import Koa from "koa";
import serve from "koa-static";
import favicon from "koa-favicon";
import helmet from "koa-helmet";

import { renderView } from "./middleware";
import config from "./config";

const { faviconPath , staticPath, port } = config.server;

function server(webpackResult){
  // CREATE APP //
  const app = new Koa();

  // MIDDLEWARE //
  app.use(helmet());              // Set security headers
  app.use(favicon(faviconPath));  // Serve favicon
  app.use(serve(staticPath));     // Serve static assets

  // RENDER VIEWS //
  app.use(renderView(webpackResult.chunks()));

  // START SERVER
  app.listen(port, (err) => {
    const msg = err ? "Error starting app" : `${config.name} listening on port ${port}`;
    console.log(msg);
  });

  app.on("error", (err) => {
    console.log("Server Error");
    console.log(err);
  });
}

export default server;
