// config-overrides.js

module.exports = function override(config, env) {
  if (config.devServer) {
    config.devServer.setupMiddlewares = (middlewares, devServer) => {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      // Add your custom middleware here
      // Example: devServer.app.use(someMiddlewareFunction);

      return middlewares;
    };
  }

  return config;
};
