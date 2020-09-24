const express = require("express");
const route = express.Router();
const HomeController = require("../controllers/HomeController");
const authRoutes = require("../../core/illuminate/authRoutes");

route.get("/", HomeController.welcome);
route.get("/form", HomeController.form);
route.post("/form", HomeController.submit);
route.delete("/form", HomeController.delete);

authRoutes(route);

module.exports = route;
