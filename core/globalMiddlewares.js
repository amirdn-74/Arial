const express = require("express");
const bodyParser = require("body-parser");
const general = require("../configs/general");

module.exports = (app) => {
  app.use(express.static(general.publicPath));
};
