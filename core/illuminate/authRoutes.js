const passport = require("passport");
const RegisterController = require(
  "../../app/controllers/Auth/RegisterController",
);
const LoginController = require("../../app/controllers/Auth/LoginController");
const PasswordController = require(
  "../../app/controllers/Auth/PasswordController",
);

module.exports = (route) => {
  route.get("/register", RegisterController.create);
  route.post("/register", RegisterController.addUser);
  route.get("/login", LoginController.login);
  route.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/user",
      failureRedirect: "/login",
      failureFlash: true,
    }),
  );
  route.get("/forgot-password", PasswordController.forgot);
};
