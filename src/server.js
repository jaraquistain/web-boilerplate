import Koa from "koa";
import serve from "koa-static";
import favicon from "koa-favicon";
import path from "path";

import { renderView } from "./middleware";
import config from "./config";

/** WEB SERVER **/
function server(webpack){
  // Create app
  const app = new Koa();

  // Serve static assets
  app.use(favicon(config.favicon));
  app.use(serve(config.staticPath));

  // Handle View Requests
  app.use(renderView(webpack.chunks()));

  // Start Server
  app.listen(config.port, (err) => {
    const msg = err ? "Error starting app" : `Web server listening on port ${config.port}`;
    console.log(msg);
  });

  // Handle errors
  app.on("error", (err, ctx) => {
    console.log("Server Error");
    console.log(err);
  });
}

export default server;
