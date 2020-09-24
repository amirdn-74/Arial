const { error } = require("winston");

module.exports = (req, res, next) => {
  const locals = {};
  const errors = [...req.flash("formErrors")];
  const olds = { ...req.flash("formOlds") };

  // if (!req.csrfToken) throw new Error("api route call from web");
  if (!req.csrfToken) return next();

  locals.csrfToken = `<input type="hidden" name="_csrf" value="${req.csrfToken()}" />`;
  locals.method = (method) => {
    return `<input type="hidden" name="_method" value="${method}" />`;
  };
  locals.error = (path) => {
    if (errors.length !== 0) {
      const error = errors.find((e) => e.path === path);
      return error && error.message ? error.message : "";
    }
    return "";
  };

  locals.old = (path) => {
    return olds && olds[0] && olds[0][path]
      ? olds[0][path].toString().trim()
      : "";
  };

  res.locals = locals;
  next();
};
