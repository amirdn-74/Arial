module.exports = {
  appName: env("APP_NAME", "Arial"),

  // application environment state
  environment: env("NODE_ENV", "production"),

  // specify app debug
  appDebug: env("APP_DEBUG", false),

  // path to public folder for serving static assets
  publicPath: "public",
};
