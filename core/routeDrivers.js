const csrfProtection = require("./illuminate/csrfProtection");
const { startSession, setFlash } = require("./illuminate/startSession");
const urlBodyParser = require("./illuminate/urlBodyParser");
const jsonBodyParser = require("./illuminate/jsonBodyParser");
const setViewDefaultParams = require("./illuminate/setViewDefaultParams");
const useMethodOverride = require("./illuminate/useMethodOverride");

module.exports.webDriver = [
  startSession,
  setFlash,
  urlBodyParser,
  csrfProtection,
  useMethodOverride,
  setViewDefaultParams,
];
module.exports.apiDriver = [jsonBodyParser];
