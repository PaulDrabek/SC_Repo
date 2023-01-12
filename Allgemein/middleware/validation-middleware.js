//Expressvalidator als Middleware für die Überprüfung der Daten aus einem Request von einem Benutzer
const { validationResult } = require("express-validator");

exports.validationMiddleware = (req, res, next) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};
