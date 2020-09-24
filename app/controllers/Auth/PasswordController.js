class PasswordController {
  forgot() {
    return view("auth/forgotPassword");
  }
}

module.exports = new PasswordController();
