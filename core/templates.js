const hbs = require("express-handlebars");
const view = require("../configs/view");

module.exports = (app) => {
  app.engine(
    "hbs",
    hbs({
      extname: "hbs",
      defaultLayout: view.hbsDefaultLayout,
      layoutsDir: view.hbsLayoutsDir,
      partialsDir: view.hbsPartialsDir,
    })
  );
  app.set("view engine", view.viewEngine);
  app.set("views", view.viewsDir);
};
