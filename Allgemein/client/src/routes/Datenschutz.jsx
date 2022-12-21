import React from "react";
import DatenschutzContent from "../components/DatenschutzContent";
import "../styles/Body.css";
import Container from "react-bootstrap/esm/Container";


//Bauteil Information (aus einem ID) URL
const Datenschutz = () => {
  return (
    <Container fluid className="bodyContainer">
      <DatenschutzContent/>
    </Container>
  );
};

export default Datenschutz;