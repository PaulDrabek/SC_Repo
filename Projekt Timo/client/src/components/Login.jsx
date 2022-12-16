import React, { useContext, useState } from "react";
import { getBenutzerTyp, onLogin } from "../apis/AuthFinder";
//To dispatch an action for the slices authorization
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice";
import { BauteilContext } from "../context/BauteilContext";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

//Komponent für Login Page
const Login = () => {
  const [benutzername, setBenutzerName] = useState("");
  const [kennwort, setKennwort] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const { userData, setUserData } = useContext(BauteilContext);

  const dispatch = useDispatch();

  //Funciton, um das Aktion des Endbenutzers beim Loggin Clicken zu steuern
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await onLogin({
        benutzername: benutzername,
        kennwort: kennwort,
      });
      //wenn wir diese Aktion "dispatch" dann ist der State zu "true" geändert
      dispatch(authenticateUser());
      localStorage.setItem("isAuth", "true");
      setErrMsg("");

      const response2 = await getBenutzerTyp(benutzername);
      const benutzertyp = response2.data.data.benutzertyp;
      setUserData({
        benutzername,
        benutzertyp,
      });
      console.log(userData);
    } catch (err) {
      setErrMsg(err.response.data.errors[0]);
      console.error(err.message);
    }
  };

  //React Bootstrap bzw. HTML Code für das Ansehen der Login Page
  return (
    <Container >
      <Row className="justify-content-md-center" sm="auto">
        <Card className=" p-0" >
          <Card.Header className="text-center p-2" style={{ backgroundColor: "#dee2e6" }}>
            <h1>Anmeldung</h1>
          </Card.Header>
          <Card.Body className="p-0" style={{ backgroundColor: "#dee2e6" }}>
            <Form className="p-4 rounded  border-light justify-content-md-center ">
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
              <Form.Group className="mb-3" controlId="ControlBenutzername">
                <Row>
                  <Form.Label column="lg" md={5}>
                    Benutzername
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="lg"
                      value={benutzername}
                      onChange={(e) => setBenutzerName(e.target.value)}
                      type="text"
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlKennwort">
                <Row>
                  <Form.Label column="lg" md={5}>
                    Kennwort
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="lg"
                      value={kennwort}
                      onChange={(e) => setKennwort(e.target.value)}
                      type="password"
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Row className="justify-content-md-center mb-2" md="auto">
                <Button
                  variant="primary"
                  onClick={handleLogIn}
                  type="submit"
                  size="lg"
                >
                  Anmelden
                </Button>
              </Row>
              <Alert
                className="d-flex justify-content-md-center"
                key="light"
                variant="light"
              >
                Für die Registrierung bitte den Admin kontaktieren
              </Alert>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Login;
