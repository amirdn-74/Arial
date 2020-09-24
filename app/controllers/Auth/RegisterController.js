const User = require("../../models/User");
const Yup = require("yup");
const { validation } = require("../../helpers/validation");

class RegisterController {
  create(req, res) {
    return view("auth/register");
  }

  async addUser(req, res, next) {
    const schema = validationSchema();

    const errors = await validation(req, schema);
    if (errors) return res.redirect("/register");

    const user = createUser(req);

    return req.login(user, (er) => {
      // if (er) {
      //   console.log(er);
      //   return next(er);
      // }
      return res.redirect("/user");
    });

    res.send(user);
  }
}

function createUser(req) {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user.save();
  return user;
}

function validationSchema() {
  return Yup.object().shape({
    name: Yup.string().required().min(3),
    email: Yup.string()
      .email()
      .required()
      .test(
        "unique email",
        "this email has already been taken",
        async (email) => {
          const user = await User.findOne({ email });
          if (user) return false;
          return true;
        },
      ),
    password: Yup.string().min(6),
  });
}

module.exports = new RegisterController();
