const route = require("express").Router();

route.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = route;
