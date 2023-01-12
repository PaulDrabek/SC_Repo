// Code für die Anwendung von Postgres und die Benutzung von globalen/lokalen Konstanten.
const { Pool } = require("pg");
const {
  PGUSER,
  PGPASSWORD,
  PGHOST,
  PGDATABASE,
  PGPORT,
} = require("../constants");

//Einstellung der Konstanten für die Postgres in Entwicklung (Development oder dev)
const devConfig = {
  PGUSER,
  PGPASSWORD,
  PGHOST,
  PGDATABASE,
  PGPORT,
};

//Einstellung der Konstanten für die Postgres in Produktion (pro)
const proConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addon für Datenbank auf Heroku
  ssl: {
    rejectUnauthorized: false,
  },
};

//Normale Funktion für die Anwendung von Postgres mit ExpressJS, wird die Einstellung von Entwicklung oder von Produktion benutzen
// anhand von der Situation
const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
