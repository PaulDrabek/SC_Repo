//Middleware für die Überprüfung einer Aunthentifizierung durch Passwort und jwt
const passport = require("passport");

exports.userAuth = passport.authenticate("jwt", { session: false });
