const csrf = require("csurf");
const csrfConfig = require("../../configs/csrf");

const config = {
  cookie: csrfConfig.cookie,
  ignoreMethods: csrfConfig.ignoreMethods,
  sessionKey: csrfConfig.sessionKey,
};

if (csrfConfig.value) config.value = csrfConfig.value;
module.exports = csrf(config);
