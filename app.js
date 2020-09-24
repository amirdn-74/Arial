const fs = require("fs").promises;
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
// const passport = require("passport");
// const User = require("./app/models/User");
// const LocalStrategy = require("passport-local").Strategy;

global.app = app;

global.env = function (key, replace) {
  if (key === "NODE_ENV") {
    return !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "development"
      : process.env.NODE_ENV;
  }
  return process.env[key] ? process.env[key] : replace;
};

app.use((req, res, next) => {
  process.on("uncaughtException", (ex) => {
    return next(ex);
  });

  process.on("unhandledRejection", (ex) => {
    return next(ex);
  });

  return next();
});

// passport.use(
//   new LocalStrategy(
//     { usernameField: "email" },
//     async (email, password, done) => {
//       const user = await User.findOne({ email });
//       if (!user || user.password !== password) {
//         return done(null, false, {
//           message: "invalid username and password!",
//         });
//       }

//       return done(null, user);
//     },
//   ),
// );

app.use(cookieParser("hello cookie"));
require("dotenv").config();
require("./core/global")(app);
require("./core/templates")(app);
require("./core/globalMiddlewares")(app);
require("./core/rootRouter")(app);
require("./core/database/dbConnection")(app);

app.get("/user", (req, res) => {
  console.log(req.authInfo);
  if (req.isAuthenticated()) return res.send("authenticated");
  return res.send("unauthenticated");
});

app.use(async (err, req, res, next) => {
  console.log("next: ", err);
  const exTitle = err.message ? err.message : err;
  const data = await fs.readFile("app/views/errors/appError.html");
  const errorHTML = data
    .toString()
    .replace("{{title}}", exTitle)
    .replace("{{title}}", exTitle)
    .replace("{{details}}", err.stack || err);
  res.write(errorHTML);
  res.status(500).send();
});
