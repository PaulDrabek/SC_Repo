import React from "react";
import Login from "../components/Login";
import Container from "react-bootstrap/esm/Container";
import "../styles/Body.css";

//Anmelden URL
const LoginPage = () => {
  return (
    <Container fluid className="bodyContainer">
    <div>
      <Login />
    </div>

    </Container>
  );
};

export default LoginPage;
