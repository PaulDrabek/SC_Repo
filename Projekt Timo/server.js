//require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const { PORT, CLIENT_URL } = require("./constants");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const path = require("path");

require("./middleware/passport-middleware");

app.use(express.json(), cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());

const { cookie } = require("express-validator");
const { allowedNodeEnvironmentFlags } = require("process");

//Code für Heroku Falls es im Produktion ist
if (process.env.NODE_ENV === "production") {
  //Erlaubt uns static content aus einem Abalgeort anzuwenden
  app.use(express.static(path.join(__dirname, "client/build")));

  app.use(router);

  // For any request that doesn't
  // match one above, send back React's index.html file.
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });
}

app.use(router);

// Value of port is stored in environment variable File .env
app.listen(PORT, () => {
  console.log(`server is up and listening on port ${PORT}`);
});
