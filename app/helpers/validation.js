const Yup = require("yup");

const validation = async (req, schema) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
  } catch (error) {
    req.flash("formErrors", error.inner);
    req.flash("formOlds", error.value);
    return error;
  }
};

const makeValidationError = (e) => {
  const errors = { errors: [], inner: [], name: "ValidationError" };
  errors.errors.push(e.message);
  errors.inner.push({ path: e.field, message: e.message });
  return errors;
};

module.exports.validation = validation;
module.exports.makeValidationError = makeValidationError;
