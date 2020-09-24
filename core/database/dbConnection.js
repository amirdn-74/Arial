const mongodb = require("./drivers/mongodb");
const database = require("../../configs/database");

module.exports = (app) => {
  if (database.driver === "mongodb") mongodb(app);
};
