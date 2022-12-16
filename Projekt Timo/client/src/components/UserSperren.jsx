import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { isUserBlocked, blockUnblockUser } from "../apis/AuthFinder";

const UserSperren = () => {
  const [userToBeBlocked, setUserToBeBlocked] = useState({
    benutzername: "",
    success: false,
    blocked: "",
    msg: "",
  });
  const [errMsg, setErrMsg] = useState("");

  async function handleUserSearch(e) {
    e.preventDefault();
    setErrMsg("");
    try {
      const response = await isUserBlocked(userToBeBlocked.benutzername);
      setUserToBeBlocked({
        ...userToBeBlocked,
        blocked: response.data.data.blocked,
      });
    } catch (err) {
      setErrMsg(err.response.data.errors[0]);
    }
  }

  async function handleUserBlock(e) {
    e.preventDefault();
    setErrMsg("");
    try {
      const response = await blockUnblockUser(userToBeBlocked.benutzername);
      setUserToBeBlocked({
        ...userToBeBlocked,
        success: true,
        msg: response.data.message,
        blocked: response.data.blocked,
      });
    } catch (err) {
      setUserToBeBlocked({
        ...userToBeBlocked,
        success: false,
        msg: "",
      });
      setErrMsg({ msg: err.message });
    }
  }

  return (
    <Container>
      <h1 className="userAdministrationText">User Sperren</h1>
      <form>
        <Alert
          className="p-0"
          key="sucesss"
          variant="success"
          show={userToBeBlocked.success ? true : false}
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
                {userToBeBlocked.msg}
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
          <Col md={6}>
            <Row>
              <label className="registrationLabel" htmlFor="inputBenutzerName">
                Benutzername
              </label>
            </Row>
            <Row>
              <input
                className="registrationField"
                type="text"
                placeholder=""
                onChange={(e) => {
                  setUserToBeBlocked({
                    ...userToBeBlocked,
                    benutzername: e.target.value,
                  });
                }}
              />
            </Row>
          </Col>
          <Col md={3}>
            <button className="searchbutton" onClick={handleUserSearch}>
              Suchen
            </button>
          </Col>
          <Col md={3}>
            <Row>
              <label className="registrationLabel" htmlFor="inputBenutzerName">
                Status
              </label>
            </Row>
            <Row>
              <input
                className="searchField"
                type="text"
                placeholder={userToBeBlocked.blocked.toString()}
                disabled
              />
            </Row>
          </Col>
        </Row>
        <Row className="userRegistrierungRow">
          <button className="registerButton" onClick={handleUserBlock}>
            User Sperren / Entsperren
          </button>
        </Row>
      </form>
    </Container>
  );
};

export default UserSperren;
