import { onRegistration } from "../apis/AuthFinder";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const UserManagement = () => {
  const [userToBeRegister, setUserToBeRegister] = useState({
    benutzername: "",
    kennwort: "",
    kennwortBestätigung: "",
    benutzertyp: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [userRegistered, setUserRegistered] = useState({
    success: false,
    msg: "",
  });

  async function handleUserRegistrierung(e) {
    e.preventDefault();
    let equalPassword = true;
    try {
      if (userToBeRegister.kennwort !== userToBeRegister.kennwortBestätigung) {
        equalPassword = false;
        throw new Error("Beide Passwörter sind nicht gleich");
      }
      const response = await onRegistration({
        benutzername: userToBeRegister.benutzername,
        kennwort: userToBeRegister.kennwort,
        kennwortBestätigung: userToBeRegister.kennwortBestätigung,
        benutzertyp: userToBeRegister.benutzertyp,
      });
      setUserRegistered({
        success: true,
        msg: "Benutzer erfolgreich registriert",
      });
      setErrMsg("");
    } catch (err) {
      setUserRegistered({ success: false, msg: "" });
      equalPassword
        ? setErrMsg(err.response.data.errors[0])
        : setErrMsg({ msg: err.message });
      console.log(errMsg.msg);
    }
  }
  console.log(userToBeRegister);

  return (
    <Container>
      <h1 className="userAdministrationText">User Registrierung</h1>
      <form>
        <Alert
          className="p-0"
          key="sucesss"
          variant="success"
          show={userRegistered.success ? true : false}
        >
          <Row className="mx-3 my-1">
            <Col
              md="auto"
              className="d-flex justify-content-center align-items-center p-1"
            >
              <Alert.Heading className="m-0">Erfolg</Alert.Heading>
            </Col>
            <Col className="d-flex align-items-center justify-content-center p-1">
              <p className="m-0" aria-live="assertive">
                {userRegistered.msg}
              </p>
            </Col>
          </Row>
        </Alert>
        <Alert
          className="p-0"
          key="danger"
          variant="danger"
          show={errMsg ? true : false}
        >
          <Row className="mx-3 my-1">
            <Col
              md="auto"
              className="d-flex justify-content-center align-items-center p-1"
            >
              <Alert.Heading className="m-0">Fehler</Alert.Heading>
            </Col>
            <Col className="d-flex align-items-center justify-content-center p-1">
              <p className="m-0" aria-live="assertive">
                {errMsg.msg}
              </p>
            </Col>
          </Row>
        </Alert>
        <Row className="userRegistrierungRow">
          <label className="registrationLabel" htmlFor="inputBenutzerName">
            Benutzername
          </label>
          <input
            className="registrationField"
            type="text"
            placeholder=""
            onChange={(e) => {
              setUserToBeRegister({
                ...userToBeRegister,
                benutzername: e.target.value,
              });
            }}
          />
        </Row>
        <Row className="userRegistrierungRow">
          <Col>
            <label className="registrationLabel" htmlFor="inputKennwort">
              Kennwort
            </label>
            <input
              className="registrationField"
              type="password"
              placeholder=""
              onChange={(e) => {
                setUserToBeRegister({
                  ...userToBeRegister,
                  kennwort: e.target.value,
                });
              }}
            />
          </Col>
          <Col>
            <label
              className="registrationLabel"
              htmlFor="inputKennwortBestätigung"
            >
              Kennwort Wiederholen
            </label>
            <input
              className="registrationField"
              type="password"
              placeholder=""
              onChange={(e) => {
                setUserToBeRegister({
                  ...userToBeRegister,
                  kennwortBestätigung: e.target.value,
                });
              }}
            />
          </Col>
        </Row>
        <Row className="userRegistrierungRow">
          <label className="registrationLabel" htmlFor="benutzertyp">
            Welcher Benutzertyp?
          </label>
          <select
            className="registrationField"
            id="benutzertyp"
            name="benutzertyp"
            onChange={(e) => {
              setUserToBeRegister({
                ...userToBeRegister,
                benutzertyp: e.target.value,
              });
            }}
          >
            <option value="placeholder">Benutzertyp auswählen</option>
            <option value="Admin">Admin</option>
            <option value="Produktionsmitarbeiter">
              Produktionsmitarbeiter
            </option>
            <option value="Monteur">Monteur</option>
            <option value="Handwerker">Handwerker</option>
            <option value="Besitzer">Besitzer</option>
          </select>
        </Row>
        <Row className="userRegistrierungRow">
          <button className="registerButton" onClick={handleUserRegistrierung}>
            User Registrierung
          </button>
        </Row>
      </form>
    </Container>
  );
};

export default UserManagement;
