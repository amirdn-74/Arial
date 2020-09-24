const session = require("express-session");
const sessionConfig = require("../../configs/session");
const flash = require("express-flash");

module.exports.startSession = session({
  secret: sessionConfig.sessionSecret,
  resave: sessionConfig.resave,
  saveUninitialized: sessionConfig.saveUninitialized,
});

module.exports.setFlash = flash();
