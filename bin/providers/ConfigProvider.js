const cookieParser = require("cookie-parser");

module.exports = (app) => {
  app.use((req, res, next) => {
    app.set("view engine", "ejs");
    app.set("views", "app/views");
    app.use(express.static("public"));
    app.use(express.json());
    app.use(cookieParser());
    require("../../core/csrf")(app);

    next();
  });
};
