module.exports = {
  sessionSecret: env("SESSION_SECRET", "key"),

  resave: false,

  saveUninitialized: false,
};
