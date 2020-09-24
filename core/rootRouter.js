const RouteProvider = require("../bin/providers/RouteProvider");
const { webDriver, apiDriver } = require("./routeDrivers");

module.exports = (app) => {
  RouteProvider.map((route) => {
    const router = require(`../app/routes/${route.fileName}`);
    let middlewares;
    if (route.driver === "web") {
      middlewares = [...webDriver, ...route.middlewares];
    } else if (route.driver === "api") {
      middlewares = [...apiDriver, ...route.middlewares];
    }
    require("./illuminate/passportLocal")(app);
    app.use(route.prefix, middlewares, router);
  });
};
