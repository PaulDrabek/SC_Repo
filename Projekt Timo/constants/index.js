// dotenv für die verarbeitung von secret Keys
const { config } = require("dotenv");

config();

//Exports über alle Systemvariablen, um sowohl Lokal als auch von Heroku, arbeiten zu können.
module.exports = {
  PORT: process.env.PORT || 4000,
  SERVER_URL: process.env.SERVER_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  SECRET: process.env.SECRET,

  PGUSER: process.env.PG_USER,
  PGPASSWORD: process.env.PG_PASSWORD,
  PGHOST: process.env.PG_HOST,
  PGDATABASE: process.env.PG_DATABASE,
  PGPORT: process.env.PG_PORT,
};
