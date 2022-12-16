//bcryptjs für die Verschlüsselung von Passwörter
const { hash } = require("bcryptjs");
//db für die Anwendung der Postgres Datenbank
const db = require("../db");
//jsonwebtoken für die Anwendunf von Webtokens auf dem Browser und somit, mit Cookies Authentifizierungsverfahren durchzuführen
const { sign } = require("jsonwebtoken");
//Importierung der secret Schlüssel von Constants
const { SECRET } = require("../constants");

// Register Verfahren, es nimmt die Daten aus dem Request des Frontends (benutzername, kennwort und benutzertyp),
// verschlüsselt das Passwort bevor es in den Datenbank gespeichert wird und dann speichert die sämtlichen Daten eines Benutzers in
// der Tabelle Benutzer
exports.register = async (req, res) => {
  const { benutzername, kennwort, benutzertyp } = req.body;
  try {
    const hasedPassword = await hash(kennwort, 10);
    await db.query(
      "Insert into benutzer (benutzername, kennwort, benutzertyp) values ($1,$2,$3)",
      [benutzername, hasedPassword, benutzertyp]
    );
    return res.status(201).json({
      success: true,
      message: "Die Registrierung war erfolgreich!",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

//Einloggen-Funktion für die Authentifizierung, es nimmt die Daten eines Benutzers aus dem Frontend und erstellt Cookies,
// die die richtige Aunthetifizierung eines Benutzers aus dem Browser nachweisen kann
exports.login = async (req, res) => {
  let benutzer = req.benutzer;
  let payload = {
    id: benutzer.id,
    benutzername: benutzer.benutzername,
  };
  try {
    const token = await sign(payload, SECRET);
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
      .json({
        success: true,
        message: "Erfolgreich eingeloggt",
      });
  } catch (error) {
    console.error(error.message);
  }
};

// Funktion für das Ausloggen, es löscht das Cookie von einem aunthentifizierte Benutzer und loggt eines Benutzers aus.
exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Erfolgreich ausgeloggt",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

//Beispiel für ein API, die gibt zu dem Frontend eine positive Antwort, nur wenn das Request aus einem aunthzifizierten Benutzer kommt
exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "protected info",
    });
  } catch (error) {
    console.log(error.message);
  }
};
