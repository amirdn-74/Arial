class HomeController {
  welcome(req, res) {
    // if (req.user) return res.send(req.user);
    console.log(req.user);
    return view("welcome");
  }

  form(req, res) {
    return view("form");
  }

  submit(req, res) {
    res.json(req.body);
  }

  delete(req, res) {
    res.send("delete");
  }
}

module.exports = new HomeController();
