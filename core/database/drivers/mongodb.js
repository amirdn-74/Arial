const mongoose = require("mongoose");
const db = require("../../../configs/database");
const serve = require("../../../bin/serve");

module.exports = (app) => {
  const {
    host,
    port,
    database,
    username,
    password,
    connectionString,
  } = db.drivers.mongodb;

  let connection;

  if (!connectionString) {
    connection = mongoose.connect(`mongodb://${host}:${port}/${database}`, {
      auth: {
        user: username,
        password,
      },
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } else {
    connection = mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
  }

  connection
    .then(() => {
      serve(app);
    })
    .catch((er) => {
      console.log(er);
      throw er;
    });
};
