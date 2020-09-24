const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../app/models/User");

module.exports = (app) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
          return done(null, false, {
            message: "invalid username or password!",
          });
        }

        return done(null, user);
      },
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser(async (email, done) => {
    const user = User.findOne({ email });
    done(null, user);
  });

  app.use(passport.initialize());
  app.use(passport.session());
};
