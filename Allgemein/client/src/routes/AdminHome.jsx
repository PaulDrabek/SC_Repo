import { useEffect, useContext, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useNavigate } from "react-router-dom";
import UserRegistrierung from "../components/UserRegistrierung";
import UserBearbeitung from "../components/UserBearbeitung";
import UserSperren from "../components/UserSperren";
import UserLöschen from "../components/UserLöschen";
import { BauteilContext } from "../context/BauteilContext";
import "../styles/AdminHome.css";

const AdminHome = () => {
  const { userData } = useContext(BauteilContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (userData.benutzertyp !== "Admin") navigate("/");
  }, [userData.benutzertyp]);

  const [options, setOptions] = useState({
    userMngmt: false,
    hausMngmt: false,
    userRegistrieren: false,
    userBearbeiten: false,
    userSperren: false,
    userLöschen: false,
  });

  return (
    <Container fluid className="bodyContainer px-3">
      <Row className="adminRow">
        <Col className="adminOptionsButtonCol" md={3}>
          <button
            className="adminOptionsButton"
            onClick={() =>
              setOptions({ ...options, userMngmt: true, hausMngmt: false })
            }
          >
            User Management
          </button>
        </Col>
        {options.userMngmt && (
          <>
            <Col className="userAdministrationOptionsButtonCol" md={3}>
              <h2 className="userAdministrationText">Wähle die Option</h2>
              <button
                className="userAdministrationOptionsButton"
                onClick={() =>
                  setOptions({
                    ...options,
                    userRegistrieren: true,
                    userBearbeiten: false,
                    userSperren: false,
                    userLöschen: false,
                    // muss noch die Optionen von Hausmanagement zum false setzen
                  })
                }
              >
                User Registrierung
              </button>
              <button
                className="userAdministrationOptionsButton"
                onClick={() =>
                  setOptions({
                    ...options,
                    userRegistrieren: false,
                    userBearbeiten: true,
                    userSperren: false,
                    userLöschen: false,
                  })
                }
              >
                User Bearbeitung
              </button>
              <button
                className="userAdministrationOptionsButton"
                onClick={() =>
                  setOptions({
                    ...options,
                    userRegistrieren: false,
                    userBearbeiten: false,
                    userSperren: true,
                    userLöschen: false,
                  })
                }
              >
                User Sperren
              </button>
              <button
                className="userAdministrationOptionsButton"
                onClick={() =>
                  setOptions({
                    ...options,
                    userRegistrieren: false,
                    userBearbeiten: false,
                    userSperren: false,
                    userLöschen: true,
                  })
                }
              >
                User Löschen
              </button>
            </Col>
            <Col className="componentsAdminCol">
              {options.userRegistrieren && <UserRegistrierung />}
              {options.userBearbeitung && <UserBearbeitung />}
              {options.userSperren && <UserSperren />}
              {options.userLöschen && <UserLöschen />}
            </Col>
          </>
        )}
      </Row>
      <Row className="adminRow">
        <Col className="adminOptionsButtonCol" md={3}>
          <button
            className="adminOptionsButton"
            onClick={() =>
              setOptions({
                hausMngmt: true,
                userMngmt: false,
                userRegistrieren: false,
                userBearbeiten: false,
                userSperren: false,
                userLöschen: false,
              })
            }
          >
            Haus Management
          </button>
        </Col>
        {options.hausMngmt && (
          <Col>
            <h3>Placeholder hausManamgent</h3>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default AdminHome;
