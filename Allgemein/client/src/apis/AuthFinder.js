import axios from "axios";
//So dass wir mit Cookies arbeiten können und das Server die Token erhält
axios.defaults.withCredentials = true;

//API zu Backend für die Registrierung eines Benutzer
export async function onRegistration(registrationData) {
  return await axios.post("/user/register", registrationData);
}

//API zu Backend für eine Loginrequest
export async function onLogin(loginData) {
  return await axios.post("/user/login", loginData);
}

//API zu Backend für eine Logoutrequest
export async function onLogout() {
  return await axios.get("/user/logout");
}

//API zu Backend um zu prüfen ob einem User für einem "protected" Route authentifiziert ist. Noch nicht angewendet aber notwendig für
// zukunftige Funktionen
export async function fetchProtectedInfo() {
  return await axios.get("/user/protected");
}

//API zu Backend, um Typ des Benutzers abzurufen
export async function getBenutzerTyp(benutzername) {
  return await axios.get(`/user/benutzertyp/${benutzername}`);
}

//API zu Backend, um zu fragen on ein User gesperrt ist
export async function isUserBlocked(benutzername) {
  return await axios.get(`/user/userblocked/${benutzername}`);
}

export async function blockUnblockUser(benutzername) {
  return await axios.put(`/user/blockuser/${benutzername}`);
}
