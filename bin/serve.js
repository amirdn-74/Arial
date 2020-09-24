module.exports = (app) => {
  const environment = process.env.NODE_ENV;
  const port = normalizePort(process.env.PORT || 4000);

  app.listen(port, () => {
    !environment || environment === "development"
      ? console.log(`node is listening on port ${port}`)
      : "";
  });
};

function normalizePort(val) {
  const port = parseInt(val);

  if (isNaN(port)) return val;

  if (port >= 0) return port;

  return false;
}
