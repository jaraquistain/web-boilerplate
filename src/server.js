import Koa from "koa";

import { renderView } from "./middleware";

export default (config) => {

  // Create Koa app
  const app = new Koa();

  // Handle View Requests
  app.use(renderView(config));

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
};
