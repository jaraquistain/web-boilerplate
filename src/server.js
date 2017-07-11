import Koa from "koa";


export const run = (config) => {
  const app = new Koa();

  app.use(ctx => {
    ctx.body = "hello World";
  });

  app.listen(config.port, (err) => {
    const msg = err ? "Error starting app" : `Web serverr listening on port ${config.port}`
    console.log(msg);
  });
};

export default run;
