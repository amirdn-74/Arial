const passport = require("passport");

class LoginController {
  login(req, res) {
    return view("auth/login");
  }

  authenticate(req, res) {}
}

module.exports = new LoginController();
