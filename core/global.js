module.exports = (app) => {
  app.use((req, res, next) => {
    global.view = function (view, data) {
      res.render(view, data);
    };

    next();
  });
};
