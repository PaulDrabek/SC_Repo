import React from "react";
import ImpressumContent from "../components/ImpressumContent";
import Container from "react-bootstrap/esm/Container";
import "../styles/Body.css";


//Bauteil Information (aus einem ID) URL
const Impressum = () => {
  return (
    <Container fluid className="bodyContainer">
      <ImpressumContent/>
    </Container>
  );
};

export default Impressum;